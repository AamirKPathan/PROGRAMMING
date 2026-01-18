weekDays0, weekDays1, weekDays2, weekDays3, weekDays4, weekDays5, weekDays6 = "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"

def getMonthName(m):
    months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ]
    return months[m]

def getDayName(d):
    return [weekDays0, weekDays1, weekDays2, weekDays3, weekDays4, weekDays5, weekDays6][d]

def isLeap(year):
    return (year % 4 == 0 and (year % 100 != 0 or year % 400 == 0))

def daysInMonth(m, y):
    if m == 1:
        return 29 if isLeap(y) else 28
    if m in [3, 5, 8, 10]:
        return 30
    return 31

def daysSince1900(y, m, d):
    total = 0
    for year in range(1900, y):
        total += 366 if isLeap(year) else 365
    for month in range(m):
        total += daysInMonth(month, y)
    total += (d - 1)
    return total

def getWeekday(y, m, d):
    return daysSince1900(y, m, d) % 7

def printMonth(m, y):
    print(f"\n{getMonthName(m)} {y}\n")
    headerLine = "".join(f"{getDayName(i):<8}" for i in range(7))
    print(headerLine)

    startDay = getWeekday(y, m, 1)
    line = " " * (8 * startDay)

    for day in range(1, daysInMonth(m, y) + 1):
        line += f"{day:<8}"
        startDay += 1
        if startDay == 7:
            print(line)
            line = ""
            startDay = 0
    if line:
        print(line)

def printYear(y):
    for month in range(12):
        printMonth(month, y)

def getDayOfDate(d, m, y):
    return getDayName(getWeekday(y, m - 1, d))

def getDateAfterNDays(n):
    y = 1900
    while True:
        daysInYear = 366 if isLeap(y) else 365
        if n < daysInYear:
            break
        n -= daysInYear
        y += 1
    m = 0
    while True:
        dim = daysInMonth(m, y)
        if n < dim:
            break
        n -= dim
        m += 1
    return f"{getMonthName(m)} {n + 1}, {y}"

def inputInteger(prompt, minValue=None, maxValue=None):
    while True:
        val = input(prompt)
        if val.lstrip('-').isdigit():
            intval = int(val)
            if (minValue is not None and intval < minValue) or (maxValue is not None and intval > maxValue):
                print(f"Error: Input must be between {minValue} and {maxValue}.")
            else:
                return intval
        else:
            print("Error: Please enter a valid integer.")

def inputMonthName(prompt):
    while True:
        val = input(prompt).strip().lower()
        for i in range(12):
            if getMonthName(i).lower() == val:
                return i
        print("Error: Invalid month name. Please try again.")

while True:
    print("\n1 - Print calendar for a year")
    print("2 - Print calendar for a month")
    print("3 - Find day of a date")
    print("4 - Find date after N days from Jan 1, 1900")
    print("5 - Exit")

    choice = input("Enter your choice: ").strip()
    if choice == "1":
        y = inputInteger("Enter a year (>= 1900): ", minValue=1900)
        printYear(y)

    elif choice == "2":
        monthIndex = inputMonthName("Enter full month name (e.g. January): ")
        y = inputInteger("Enter a year (>= 1900): ", minValue=1900)
        printMonth(monthIndex, y)

    elif choice == "3":
        d = inputInteger("Please enter the day # of the date (1-31): ", 1, 31)
        m = inputInteger("Please enter the month # of the date (1-12): ", 1, 12)
        y = inputInteger("Please enter the year # of the date (>= 1900): ", minValue=1900)

        maxDay = daysInMonth(m - 1, y)
        if d > maxDay:
            print(f"Error: Day must be between 1 and {maxDay} for {getMonthName(m - 1)} {y}.")
            continue
        dayName = getDayOfDate(d, m, y)
        print(f"{getMonthName(m - 1)} {d}, {y} is a {dayName}.")

    elif choice == "4":
        n = inputInteger("Please enter the number of days after January 1, 1900: ", minValue=0)
        dateStr = getDateAfterNDays(n)
        print(f"The date of {n} days after January 1, 1900 is {dateStr}.")

    elif choice == "5":
        print("Exiting program.")
        break

    else:
        print("Invalid option. Please enter 1, 2, 3, 4 or 5.")
