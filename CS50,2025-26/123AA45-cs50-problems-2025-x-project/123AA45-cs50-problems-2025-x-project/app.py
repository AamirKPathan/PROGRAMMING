from flask import Flask, render_template, request, redirect, session
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import sqlite3, os

from models import init_db

app = Flask(__name__)
app.secret_key = "your_secret_key"
app.config["UPLOAD_FOLDER"] = "static/uploads"

# Initialize the database
init_db()

def is_admin():
    if "user" not in session:
        return False
    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("SELECT * FROM admins WHERE username = ?", (session["user"],))
    result = db.fetchone()
    conn.close()
    return result is not None
def get_seller_ratings():
    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("""
        SELECT seller, AVG(rating) FROM reviews GROUP BY seller
    """)
    ratings = {row[0]: round(row[1], 1) for row in db.fetchall()}
    conn.close()
    return ratings

@app.route("/", methods=["GET"])
def index():
    if "user" not in session:
        return redirect("/login")

    keyword = request.args.get("keyword", "").strip()
    category = request.args.get("category", "").strip()
    min_price = request.args.get("min_price", "").strip()
    max_price = request.args.get("max_price", "").strip()
    location = request.args.get("location", "").strip()
    sort = request.args.get("sort", "").strip()

    query = "SELECT * FROM listings WHERE approved = 1"
    params = []

    if keyword:
        query += " AND (title LIKE ? OR description LIKE ?)"
        params += [f"%{keyword}%", f"%{keyword}%"]

    if category:
        query += " AND category = ?"
        params.append(category)

    if min_price:
        query += " AND price >= ?"
        params.append(min_price)

    if max_price:
        query += " AND price <= ?"
        params.append(max_price)

    if location:
        query += " AND location LIKE ?"
        params.append(f"%{location}%")

    if sort == "price_low":
        query += " ORDER BY price ASC"
    elif sort == "price_high":
        query += " ORDER BY price DESC"
    else:
        query += " ORDER BY id DESC"

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute(query, params)
    listings = db.fetchall()

    # Seller ratings
    db.execute("SELECT seller, AVG(rating) FROM reviews GROUP BY seller")
    ratings = {row[0]: round(row[1], 1) for row in db.fetchall()}

    conn.close()
    return render_template("index.html", listings=listings, ratings=ratings)

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        password = generate_password_hash(request.form["password"])

        conn = sqlite3.connect("gameswap.db")
        db = conn.cursor()
        try:
            db.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
                       (username, email, password))
            conn.commit()
        except:
            conn.close()
            return "Username or email already exists."
        conn.close()
        return redirect("/login")
    return render_template("signup.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        conn = sqlite3.connect("gameswap.db")
        db = conn.cursor()
        db.execute("SELECT * FROM users WHERE username = ?", (username,))
        user = db.fetchone()
        conn.close()

        if user and check_password_hash(user[3], password):
            session["user"] = user[1]
            return redirect("/")
        else:
            return "Invalid username or password."
    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

@app.route("/reset", methods=["GET", "POST"])
def reset():
    if request.method == "POST":
        email = request.form["email"]
        new_password = request.form["new_password"]
        hashed = generate_password_hash(new_password)

        conn = sqlite3.connect("gameswap.db")
        db = conn.cursor()
        db.execute("SELECT * FROM users WHERE email = ?", (email,))
        user = db.fetchone()

        if user:
            db.execute("UPDATE users SET password = ? WHERE email = ?", (hashed, email))
            conn.commit()
            conn.close()
            return redirect("/login")
        else:
            conn.close()
            return "Email not found."

    return render_template("reset.html")

@app.route("/post", methods=["GET", "POST"])
def post():
    if "user" not in session:
        return redirect("/login")

    if request.method == "POST":
        title = request.form["title"]
        description = request.form["description"]
        category = request.form["category"]
        price = float(request.form["price"])
        location = request.form["location"]
        seller = session["user"]

        image = request.files["image"]
        filename = ""
        if image:
            filename = secure_filename(image.filename)
            image.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))

        conn = sqlite3.connect("gameswap.db")
        db = conn.cursor()
        db.execute("""
            INSERT INTO listings (title, description, category, price, location, seller, image)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (title, description, category, price, location, seller, filename))

        db.execute("SELECT user FROM wishlist WHERE keyword LIKE ?", (f"%{title}%",))
        matches = db.fetchall()
        for match in matches:
            db.execute("INSERT INTO notifications (user, message) VALUES (?, ?)",
                       (match[0], f"'{title}' is now listed!"))

        conn.commit()
        conn.close()
        return redirect("/")
    return render_template("post.html")

@app.route("/wishlist", methods=["POST"])
def wishlist():
    if "user" not in session:
        return redirect("/login")
    keyword = request.form["wish"]
    user = session["user"]

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("INSERT INTO wishlist (user, keyword) VALUES (?, ?)", (user, keyword))
    conn.commit()
    conn.close()
    return redirect("/")

@app.route("/notifications")
def notifications():
    if "user" not in session:
        return redirect("/login")

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("SELECT id, message FROM notifications WHERE user = ? AND read = 0", (session["user"],))
    notes = db.fetchall()
    db.execute("UPDATE notifications SET read = 1 WHERE user = ?", (session["user"],))
    conn.commit()
    conn.close()

    return render_template("notifications.html", notes=notes)

@app.route("/category/<name>")
def category(name):
    user = session.get("user")

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("SELECT * FROM listings WHERE category = ? ORDER BY id DESC", (name,))
    listings = db.fetchall()
    conn.close()

    return render_template("category.html", user=user, listings=listings, category=name)

@app.route("/message/<recipient>", methods=["GET", "POST"])
def message(recipient):
    if "user" not in session:
        return redirect("/login")

    if request.method == "POST":
        content = request.form["content"]
        sender = session["user"]

        conn = sqlite3.connect("gameswap.db")
        db = conn.cursor()
        db.execute("INSERT INTO messages (sender, recipient, content) VALUES (?, ?, ?)",
                   (sender, recipient, content))
        conn.commit()
        conn.close()
        return redirect("/messages")

    return render_template("message.html", recipient=recipient)


@app.route("/edit/<int:id>", methods=["GET", "POST"])
def edit(id):
    if "user" not in session:
        return redirect("/login")

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()

    if request.method == "POST":
        title = request.form["title"]
        description = request.form["description"]
        category = request.form["category"]
        price = float(request.form["price"])
        location = request.form["location"]

        db.execute("""
            UPDATE listings SET title = ?, description = ?, category = ?, price = ?, location = ?
            WHERE id = ? AND seller = ?
        """, (title, description, category, price, location, id, session["user"]))
        conn.commit()
        conn.close()
        return redirect("/")

    db.execute("SELECT * FROM listings WHERE id = ? AND seller = ?", (id, session["user"]))
    listing = db.fetchone()
    conn.close()

    if not listing:
        return "Listing not found or unauthorized."

    return render_template("edit.html", listing=listing)

@app.route("/delete/<int:id>")
def delete(id):
    if "user" not in session:
        return redirect("/login")

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("DELETE FROM listings WHERE id = ? AND seller = ?", (id, session["user"]))
    conn.commit()
    conn.close()
    return redirect("/")

@app.route("/profile")
def profile():
    if "user" not in session:
        return redirect("/login")

    user = session["user"]

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()

    db.execute("SELECT * FROM listings WHERE seller = ? ORDER BY id DESC", (user,))
    my_listings = db.fetchall()

    db.execute("SELECT sender, content FROM messages WHERE recipient = ? ORDER BY id DESC", (user,))
    inbox = db.fetchall()

    conn.close()

    return render_template("profile.html", user=user, my_listings=my_listings, inbox=inbox)

@app.route("/listing/<int:id>")
def listing(id):
    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("SELECT * FROM listings WHERE id = ?", (id,))
    item = db.fetchone()
    conn.close()

    if not item:
        return "Listing not found."

    return render_template("listing.html", item=item)

@app.route("/favorites")
def favorites():
    if "user" not in session:
        return redirect("/login")

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("""
        SELECT listings.* FROM listings
        JOIN favorites ON listings.id = favorites.listing_id
        WHERE favorites.user = ?
    """, (session["user"],))
    listings = db.fetchall()
    conn.close()

    return render_template("favorites.html", listings=listings)

@app.route("/review/<seller>", methods=["GET", "POST"])
def review(seller):
    if "user" not in session:
        return redirect("/login")

    if request.method == "POST":
        rating = int(request.form["rating"])
        comment = request.form["comment"]
        reviewer = session["user"]

        conn = sqlite3.connect("gameswap.db")
        db = conn.cursor()
        db.execute("INSERT INTO reviews (reviewer, seller, rating, comment) VALUES (?, ?, ?, ?)",
                   (reviewer, seller, rating, comment))
        conn.commit()
        conn.close()
        return redirect(f"/reviews/{seller}")

    return render_template("review.html", seller=seller)

@app.route("/reviews/<seller>")
def reviews(seller):
    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("SELECT reviewer, rating, comment FROM reviews WHERE seller = ? ORDER BY id DESC", (seller,))
    feedback = db.fetchall()
    conn.close()

    return render_template("reviews.html", seller=seller, feedback=feedback)

@app.route("/admin")
def admin():
    if not is_admin():
        return "Access denied."

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()

    db.execute("SELECT * FROM users")
    users = db.fetchall()

    db.execute("SELECT * FROM listings")
    listings = db.fetchall()

    db.execute("SELECT * FROM reviews")
    reviews = db.fetchall()

    conn.close()
    return render_template("admin.html", users=users, listings=listings, reviews=reviews)


@app.route("/message/<recipient>")
def start_thread(recipient):
    if "user" not in session:
        return redirect("/login")
    user = session["user"]

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()

    # Check if thread already exists
    db.execute("""
        SELECT id FROM threads
        WHERE (user1 = ? AND user2 = ?) OR (user1 = ? AND user2 = ?)
    """, (user, recipient, recipient, user))
    thread = db.fetchone()

    if not thread:
        db.execute("INSERT INTO threads (user1, user2) VALUES (?, ?)", (user, recipient))
        conn.commit()
        thread_id = db.lastrowid
    else:
        thread_id = thread[0]

    conn.close()
    return redirect(f"/thread/{thread_id}")

@app.route("/thread/<int:thread_id>", methods=["GET", "POST"])
def view_thread(thread_id):
    if "user" not in session:
        return redirect("/login")

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()

    # Check if user is part of thread
    db.execute("SELECT user1, user2 FROM threads WHERE id = ?", (thread_id,))
    thread = db.fetchone()
    if not thread or session["user"] not in thread:
        conn.close()
        return "Access denied."

    if request.method == "POST":
        content = request.form["content"]
        db.execute("INSERT INTO messages (thread_id, sender, content) VALUES (?, ?, ?)",
                   (thread_id, session["user"], content))
        conn.commit()

    db.execute("SELECT sender, content, timestamp FROM messages WHERE thread_id = ? ORDER BY timestamp ASC", (thread_id,))
    messages = db.fetchall()
    conn.close()

    return render_template("thread.html", thread_id=thread_id, messages=messages, other_user=thread[1] if thread[0] == session["user"] else thread[0])

@app.route("/messages")
def inbox():
    if "user" not in session:
        return redirect("/login")
    user = session["user"]

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("""
        SELECT id, user1, user2 FROM threads
        WHERE user1 = ? OR user2 = ?
        ORDER BY id DESC
    """, (user, user))
    threads = db.fetchall()
    conn.close()

    return render_template("inbox.html", threads=threads, user=user)
@app.route("/admin/ban_user/<username>")
def ban_user(username):
    if not is_admin():
        return "Access denied."
    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("UPDATE users SET password = 'BANNED' WHERE username = ?", (username,))
    conn.commit()
    conn.close()
    return redirect("/admin")

if __name__ == "__main__":
    app.run(debug=True)

@app.route("/report/<type>/<int:target_id>", methods=["GET", "POST"])
def report(type, target_id):
    if "user" not in session:
        return redirect("/login")
    if type not in ["listing", "review"]:
        return "Invalid report type."

    if request.method == "POST":
        reason = request.form["reason"]
        conn = sqlite3.connect("gameswap.db")
        db = conn.cursor()
        db.execute("INSERT INTO reports (reporter, type, target_id, reason) VALUES (?, ?, ?, ?)",
                   (session["user"], type, target_id, reason))
        conn.commit()
        conn.close()
        return redirect("/")

    return render_template("report.html", type=type, target_id=target_id)
@app.route("/admin/approve_listing/<int:id>")
def approve_listing(id):
    if not is_admin():
        return "Access denied."
    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()
    db.execute("UPDATE listings SET approved = 1 WHERE id = ?", (id,))
    conn.commit()
    conn.close()
    return redirect("/admin")
@app.route("/favorite/<int:listing_id>")
def favorite(listing_id):
    if "user" not in session:
        return redirect("/login")

    conn = sqlite3.connect("gameswap.db")
    db = conn.cursor()

    # Check if already favorited
    db.execute("SELECT * FROM favorites WHERE user = ? AND listing_id = ?", (session["user"], listing_id))
    if not db.fetchone():
        db.execute("INSERT INTO favorites (user, listing_id) VALUES (?, ?)", (session["user"], listing_id))
        conn.commit()

    conn.close()
    return redirect("/")
