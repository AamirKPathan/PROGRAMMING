# Name: Aamir Khan Pathan
# File name: programmingAssignment12.py
# Date: 2025/04/24
# File description: Use While Loops

# Repeat Part 1
while True:
    print("\nPart 1: Enter integers (enter 0 to stop):")
    previous = None
    count = 0

    while True:
        num = int(input("Enter a number: "))
        if num == 0:
            break
        if num == previous:
            count += 1
        previous = num

    print("Number of times two consecutive numbers were equal: " + str(count))

    repeat1 = input("\nDo you want to repeat Part 1? (yes/no): ")
    if repeat1.lower() == "no":
        break

# Repeat Part 2
while True:
    print("\nPart 2: Find the largest integer whose square is less than max")
    maxValue = int(input("Enter the max value: "))
    largest = 0

    i = 1
    while i * i < maxValue:
        largest = i
        i += 1

    print("The largest integer whose square is less than " + str(maxValue) + " is: " + str(largest))

    repeat2 = input("\nDo you want to repeat Part 2? (yes/no): ")
    if repeat2.lower() == "no":
        break
# Name: Aamir Khan Pathan
# File name: programmingAssignment12.py
# Date: 2025/04/24
# File description: Use While Loops

# Repeat Part 1
while True:
    print("\nPart 1: Enter integers (enter 0 to stop):")
    previous = None
    count = 0

    while True:
        num = int(input("Enter a number: "))
        if num == 0:
            break
        if num == previous:
            count += 1
        previous = num

    print("Number of times two consecutive numbers were equal: " + str(count))

    repeat1 = input("\nDo you want to repeat Part 1? (yes/no): ")
    if repeat1.lower() == "no":
        break

# Repeat Part 2
while True:
    print("\nPart 2: Find the largest integer whose square is less than max")
    maxValue = int(input("Enter the max value: "))
    largest = 0

    i = 1
    while i * i < maxValue:
        largest = i
        i += 1

    print("The largest integer whose square is less than " + str(maxValue) + " is: " + str(largest))

    repeat2 = input("\nDo you want to repeat Part 2? (yes/no): ")
    if repeat2.lower() == "no":
        break
