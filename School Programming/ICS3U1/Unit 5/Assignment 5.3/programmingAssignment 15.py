import math

# Part 1 : Days Of The Week
print("Days Of The Week: This program helps determine what day of the week it is corresponding to the inputted number.")
days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

def day_week(n):
    print("The corresponding day is " + days_of_the_week[n])

# Part 2 : Sum Of Positive Integers
# Formula = n(n + 1)/2
print("Sum Of Positive Integers: This program helps find the sum of positive integers up to a number.")
def sum_first(n):
    return (n * (n + 1)) // 2

# Part 3 : Sum Of First Positive Odd Numbers
# The sum of the first `n` odd numbers follows the formula `n^2`
print("Sum Of First Positive Odd Numbers: This program helps find the sum of positive odd numbers up until a number.")
def sum_first_odd(n):
    return n ** 2

# Part 4: Swap Values
print("Swap Values: This program helps swap values.")
def swap_values():
    a = input("Input Value 1: ")
    b = input("Input Value 2: ")
    a, b = b, a  # Swap values
    print("The new values are (" + a + " , " + b + ").")

# Part 5: Triangle Area Finder
print("Triangle Area Finder: This program helps find the area of a triangle")
def area(a, b, c):
    s = (a + b + c) / 2  # Semi-perimeter
    result = math.sqrt(s * (s - a) * (s - b) * (s - c))  # Heron's formula
    if result > 0:
        print("The area of the triangle with sides " + str(a) + ", " + str(b) + ", " + str(c) + " is " + "{:.2f}".format(result))
    else:
        print("There is no such triangle.")

# Part 6: Triangle Angle Finder
print("Triangle Angle Finder: This program helps find a singular angle opposite to the first inputted measurement in a triangle")
def angle(a, b, c):
    try:
        radian_angle = math.acos((a**2 + b**2 - c**2) / (2 * a * b))
        degree_angle = math.degrees(radian_angle)
        if degree_angle > 0:
            print("The angle in the triangle opposite to side A with sides " + str(a) + ", " + str(b) + ", " + str(c) + " is " + "{:.2f}".format(degree_angle))
        else:
            print("There is no such triangle.")
    except ValueError:
        print("Invalid triangle measurements.")

# Program loop with menu
while True:
    print("\nChoose a program to run:")
    print("1 - Days Of The Week")
    print("2 - Sum Of Positive Integers")
    print("3 - Sum Of First Positive Odd Numbers")
    print("4 - Swap Values")
    print("5 - Triangle Area Finder")
    print("6 - Triangle Angle Finder")
    print("7 - Exit")

    choice = int(input("Enter your choice: "))

    if choice == 1:
        number_of_day = int(input("Enter the number of the day (1-7): "))
        if 1 <= number_of_day <= 7:
            day_week(number_of_day - 1)  # Adjust index
        else:
            print("Invalid input! Please enter a number between 1 and 7.")
    elif choice == 2:
        n = int(input("Input a positive integer: "))
        if n >= 0:
            print("The sum of the integers is " + str(sum_first(n)))
        else:
            print("You did not meet the conditions.")
    elif choice == 3:
        n = int(input("Input a positive integer: "))
        if n >= 0:
            print("The sum of the odd integers is " + str(sum_first_odd(n)))
        else:
            print("You did not meet the conditions.")
    elif choice == 4:
        swap_values()
    elif choice == 5:
        a = int(input("Input Length Of Side 1: "))
        b = int(input("Input Length Of Side 2: "))
        c = int(input("Input Length Of Side 3: "))  # Fix: c now gets input correctly
        area(a, b, c)
    elif choice == 6:
        a = int(input("Input Length Of Side 1: "))
        b = int(input("Input Length Of Side 2: "))
        c = int(input("Input Length Of Side 3: "))
        angle(a, b, c)
    elif choice == 7:
        print("Exiting program. Goodbye!")
        break
    else:
        print("Invalid option! Please enter a number between 1 and 7.")
