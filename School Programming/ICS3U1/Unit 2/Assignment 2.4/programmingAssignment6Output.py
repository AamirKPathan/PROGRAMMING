# Name: Aamir Khan Pathan
# File name: ProgrammingAssignment6Output.py
# Date: 2025/03/20
# File description: Display the calculations on screen
import math
# Challenge 1
    # Input And Set Variables
        # Four Digit Integer
fourDigitInteger = int(input("Input a 4 digit integer: "))

            # Print Said Integer 
print("The integer you chose is " + str(fourDigitInteger))

        # Find First Digit
firstDigit = fourDigitInteger // 1000
            
            # Find Remainder To Use For Second Digit
remainingAfterFirstDigit = fourDigitInteger % 1000

        # Find Second Digit
secondDigit = remainingAfterFirstDigit // 100

            # Find Remainder To Use For Third Digit
remainingAfterSecondDigit = remainingAfterFirstDigit % 100

        # Find Third Digit
thirdDigit = remainingAfterSecondDigit // 10

            # Find Remainder To Use For Fourth Digit
remainingAfterThirdDigit = remainingAfterSecondDigit % 10

        # Find Fourth Digit
fourthDigit = remainingAfterThirdDigit

    # Do Calculation And Output
print(str(firstDigit) + " + " + str(secondDigit)  +" + " + str(thirdDigit) + " + " + str(fourthDigit) + " = " + str(firstDigit+secondDigit+thirdDigit+fourthDigit))

# Challenge 2
    # Set/Input Variables
        # Length Of Time In Hours To 2 Decimal Places
lengthOfTime = float(input("Enter the length of time in hours up to 2 decimal places: "))

        # Set Number Of Hours
numberOfHours = int(lengthOfTime // 1)

# Calculate Total Minutes
totalMinutes = (lengthOfTime % 1) * 60
numberOfMinutes = int(totalMinutes)

# Calculate Total Seconds
totalSeconds = (totalMinutes % 1) * 60
numberOfSeconds = int(round(totalSeconds, 5))

# Handle Overflow Using Modular Arithmetic
numberOfMinutes += numberOfSeconds // 60
numberOfSeconds = numberOfSeconds % 60

numberOfHours += numberOfMinutes // 60
numberOfMinutes = numberOfMinutes % 60

    # Print Output
print(str(numberOfHours) + " hours, " + str(numberOfMinutes) + " minutes, " + str(numberOfSeconds) + " seconds")