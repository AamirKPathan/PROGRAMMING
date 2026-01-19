import turtle as t
t.speed(10)

# Define Function(s)

# Define Oval Function
def oval(r):
  t.circle(r,90) 
  t.circle(r/2,90)
  t.circle(r,90)
  t.circle(r/2,90)

# Define Fences
# Defines Fence For Darker Wood
def darkWood():
  t.begin_fill() 
  t.fillcolor('Peru')
  t.pencolor('Peru')
  t.setheading(90)
  t.forward(100)
  t.right(45)
  t.forward(20)
  t.right(90)
  t.forward(20)
  t.right(45)
  t.forward(100)
  t.end_fill()

# Defines Fence For Lighter Wood
def lightWood():
  t.begin_fill() 
  t.fillcolor('Burlywood')
  t.pencolor('Burlywood')
  t.setheading(90)
  t.forward(100)
  t.right(45)
  t.forward(20)
  t.right(90)
  t.forward(20)
  t.right(45)
  t.forward(100)
  t.end_fill()

def fences():
  for i in range(8):
    lightWood()
    darkWood()

def lawnGrass():
  t.penup()
  t.goto(-200,-120)
  t.pendown()
  t.begin_fill()
  t.fillcolor('darkgreen')
  t.pencolor('darkgreen')
  t.setheading(90)
  t.forward(80)
  t.right(90)
  t.forward(400)
  t.right(90)
  t.forward(80)
  t.right(90)
  t.forward(400)
  t.end_fill()

# Define Function For Blades Of Grass
def bladesOfGrass():
  t.begin_fill()
  t.fillcolor('ForestGreen')
  t.pencolor('ForestGreen')
  t.setheading(110)
  t.circle(15,35)
  t.setheading(0)
  t.right(35)
  t.circle(10,40)
  t.left(70)
  t.circle(8,50)
  t.setheading(290)
  t.circle(10,50)
  t.left(80)
  t.circle(10,70)
  t.setheading(295)
  t.circle(8,40)
  t.left(60)
  t.circle(7,30)
  t.setheading(215)
  t.circle(13,50)
  t.end_fill()

# Define Functions For Flowers
def flowerStem():
  t.begin_fill()
  t.fillcolor('ForestGreen')
  t.pencolor('ForestGreen')
  t.forward(2)
  t.left(90)
  t.forward(5)
  t.right(135)
  oval(3)
  t.setheading(0)
  t.left(90)
  t.forward(8)
  t.left(90)
  t.forward(2)
  t.left(90)
  t.forward(13)
  t.setheading(90)
  t.end_fill()

# Defines Function For Flower Petals
def flowerPetals():
  t.forward(15)
  t.setheading(0)
  t.begin_fill()
  t.fillcolor('white')
  t.pencolor('white')
  t.forward(2)
  t.right(45)
  oval(5) 
  t.setheading(60)
  t.forward(5)
  t.setheading(0)
  oval(6)
  t.left(95)
  oval(7)
  t.forward(2)
  t.left(90)
  t.forward(7)
  oval(5)
  t.backward(3)
  t.left(45)
  t.forward(3)
  oval(6)
  t.end_fill()

# Defines Function For Flower Pollen Center
def flowerPollenCenter():
  t.begin_fill()
  t.fillcolor('gold')
  t.pencolor('gold')
  t.circle(2)
  t.end_fill()

def flower():
  flowerStem()
  flowerPetals()
  flowerPollenCenter()

def lawn():
  lawnGrass()
  t.penup()
  t.goto(-200,-100)
  t.pendown()
  for i in range(7):
    bladesOfGrass()
    flower()
    t.setheading(0)
    t.penup()
    t.sety(-100)
    t.forward(50)
    t.pendown()
  t.penup()
  t.goto(-175,-60)
  t.pendown()
  for i in range(7):
    bladesOfGrass()
    flower()
    t.setheading(0)
    t.penup()
    t.sety(-60)
    t.forward(50)
    t.pendown()

# Road functions kept exactly as they were
def roadConcrete():
  t.pendown()
  t.begin_fill()
  t.fillcolor('gray')
  t.pencolor('gray')
  t.setheading(90)
  t.forward(80)
  t.right(90)
  t.forward(400)
  t.right(90)
  t.forward(80)
  t.right(90)
  t.forward(400)
  t.end_fill()
  t.penup()
  t.goto(-200,-170)
  t.setheading(0)

def roadPaint():
  t.pendown()
  t.pencolor('white')
  t.fillcolor('white')
  t.begin_fill()
  t.forward(50)
  t.left(90)
  t.forward(20)
  t.left(90)
  t.forward(50)
  t.left(90)
  t.forward(20)
  t.end_fill()
  t.penup()
  t.setheading(0)
  t.forward(80)

def road():
  roadConcrete()
  for i in range(6):
    roadPaint()

# Define Function For Tree
def treeLeaves():
  t.pendown()
  t.setheading(120)
  t.begin_fill()
  t.fillcolor('ForestGreen')
  t.pencolor('Forestgreen')
  t.circle(15,90)
  t.circle(25,90)
  t.right(100)
  t.circle(20,90)
  t.circle(25,90)
  t.right(180)
  t.circle(30,90)
  t.circle(40,100)
  t.right(50)
  t.circle(35,100)
  t.circle(25,90)
  t.right(150)
  t.circle(30,90)
  t.circle(25,90)
  t.right(150)
  t.circle(25,90)
  t.circle(20,120)
  t.end_fill()

def treeStump():
  t.penup()
  t.setheading(0)
  t.pendown()
  t.color('brown')
  t.begin_fill()
  t.forward(7)
  t.left(91)
  t.forward(80)
  t.right(85)
  t.forward(50)
  t.left(170)
  t.forward(50)
  t.right(85)
  t.forward(50)
  t.right(85)
  t.forward(45)
  t.left(170)
  t.forward(45)
  t.right(85)
  t.forward(94.85655)
  t.end_fill()

def tree():
  t.penup()
  t.goto(-160,200)
  t.pendown()
  treeLeaves()
  t.penup()
  t.goto(-140,-40)
  t.pendown()
  treeStump()
  t.penup()
  t.goto(160,200)
  t.pendown()
  treeLeaves()
  t.penup()
  t.goto(160,-40)
  t.pendown()
  treeStump()
def cloud():
  t.penup()
  t.goto(-120,200)
  t.pendown()
  for i in range(2):
    # Draw Cloud
    # Go To Staarting Position
    t.pendown
    # Sets the desired angle
    t.left(180)
    #Set Fill Color And Begin Fill
    t.fillcolor('white')
    t.begin_fill()
    # Set Pencolor
    t.pencolor('white')
    # Draw Circles For Clouds
    # Circle 1
    t.circle(35)
    t.forward(35)
    # Ends Fill
    t.end_fill()
    # CIrcle 2
    # Begins Fill
    # No need to reset fill color since color is same
    t.begin_fill()
    # Sets desired angle
    t.right(90)
    # Draw Circle (Radius 35)
    t.circle(35)
    # Ends Fill
    t.end_fill ()
    # CIrcle 2
    # No need to reset fill color since color is same
    t.begin_fill()
    # Sets desired angle
    t.right(90)
    # Draw Circle (Radius 35)
    t.circle(35)
    # Ends Fill
    t.end_fill()
    # CIrcle 
    # Begins Fill
    # No need to reset fill color since color is same
    t.begin_fill()
    # Sets desired angle
    t.right(90)
    # Draw Circle (Radius 35)
    t.circle(35)
    # Ends Fill
    t.end_fill()
    # CIrcle 
    # Begins Fill
    t.begin_fill()
    # Sets desired angle
    t.right(90)
    # Draw Circle (Radius 35)
    t.circle(35)
    # Ends Fill
    t.end_fill()
    # CIrcle 5
    # Begins Fill
    # No need to reset fill color since color is same
    t.begin_fill()
    # Sets desired angle
    t.right(90)
    # Draw Circle (Radius 35)
    t.circle(35)
    # Ends Fill
    t.end_fill()
    t.penup()
    t.goto(100,150)
# Function to draw the sun's circle
def sunCircle():
  t.penup()
  t.goto(175, 175)  # Adjust position for the top right corner of a 400×400 screen
  t.pendown()
  t.color("yellow")
  t.begin_fill()
  t.circle(25)  # Sun radius is still 25 pixels
  t.end_fill()

# Function to draw a single ray
def sunCircle():
  t.penup()
  t.goto(125, 150)  # Move sun inward for extra 50px buffer
  t.pendown()
  t.color("yellow")
  t.begin_fill()
  t.circle(25)  # Sun radius is still 25 pixels
  t.end_fill()

# Function to draw a single ray
def sunRays(angle):
  t.penup()
  t.goto(125, 175)  # Adjusted sun center position
  t.setheading(angle)
  t.forward(25)  # Move to the edge of the circle
  t.pendown()
  t.begin_fill()
  for i in range(3):  # Draw a triangular ray
    t.forward(15)  # Keep the rays proportional
    t.left(120)
  t.end_fill()
def houseBase():
  t.penup()
  t.goto(-75,-40)
  t.pendown()
  t.fillcolor('orange')
  t.pencolor('orange')
  t.begin_fill()
  t.setheading(100)
  t.forward(150)
  t.right(100)
  t.forward(202.09)
  t.right(100)
  t.forward(150)
  t.right(80)
  t.forward(150)
  t.end_fill()

def houseRoof():
  t.penup()
  t.goto(-126.05,107.72)
  t.pendown()
  t.fillcolor('red')
  t.pencolor('red')
  t.begin_fill()
  t.setheading(43)
  t.forward(172.28)
  t.right(86)
  t.forward(172.28)
  t.right(137)
  t.forward(252.09)
  t.end_fill()

def houseWindows():
  t.penup()
  t.goto(-60,40)
  t.pendown()
  for i in range(2):  
    t.fillcolor('skyblue')
    t.pencolor('skyblue')
    t.begin_fill()
    t.circle(20)
    t.end_fill()
    t.penup()
    t.goto(60,40)
    t.pendown()
def houseDoor():
  t.penup()
  t.goto(-25,-40)
  t.pendown()
  t.fillcolor('brown')
  t.pencolor('brown')
  t.begin_fill()
  t.setheading(105)
  t.forward(50)
  t.right(105)
  t.forward(75.88)
  t.right(105)
  t.forward(50)
  t.right(75)
  t.forward(50)
  t.end_fill()
  t.penup()
  t.right(90)
  t.forward(20)
  t.pendown()
  t.fillcolor('gold')
  t.pencolor('gold')
  t.begin_fill()
  t.circle(5)
  t.end_fill()
def house():
  houseBase()
  houseRoof()
  houseWindows()
  houseDoor()

t.screensize(200,200)
t.bgcolor('skyblue')
t.hideturtle()
# Draw the sun
sunCircle()
for angle in range(0, 360, 30):  # Adjust angles for rays
    sunRays(angle)
t.penup()
t.goto(-200,-200)
road()
t.pendown()
lawn()
cloud()
tree()
t.penup()
t.goto(-200,-40)
t.pendown()
fences()
house()