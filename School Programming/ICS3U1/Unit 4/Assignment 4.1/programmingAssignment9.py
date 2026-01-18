# Name: Aamir Khan Pathan
# File name: programmingAssignment9.py
# Date: 2025/04/14
# File description: Display the loops on screen

# Part 1
    # Set Variables
userInputNegativeInteger = 0
numbersInRange = 5
    # Create loop
for number in range(5):
    userInput = int(input("Enter a number (" + str(numbersInRange) + " to go): "))
    
    if userInput == int:
        continue
    else:
        print("You did not follow the instructions, Restart the program.")
    if userInput < 0:
        userInputNegativeInteger = userInputNegativeInteger + 1

    numbersInRange = numbersInRange - 1
print("You entered " + str(userInputNegativeInteger) + " negative numbers.\n\n\n")

# Part 2
    # Print Instructions
print("Enter a 10 different Integers.")
    # Set Loop
for number in range(10):
    userInputNumber = int(input("Enter A Number: "))
    if userInputNumber == int:
        continue
    else:
        print("You did not follow the instructions, restart the program")
    numberOfTens = userInputNumber // 10
    numberOfOnes = userInputNumber % 10
    print(str(userInputNumber) + " has " + str(numberOfTens) + " tens and " + str(numberOfOnes) + " ones.")