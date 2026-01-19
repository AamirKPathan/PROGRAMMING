# Name: Aamir Khan Pathan
# File name: programmingAssignment10.py
# Date: 2025/04/16
# File description: Display the prime number and perfect square recogniser on screen

# Asking the user for input
numInput = input("Please enter any positive integer: ")
if numInput == str or numInput == float:
  print("You did not follow the instructions please try again")
numberOfPerfectFactors = 0

# The loop below will check if the input number is a prime number or not
for i in range(1, int(numInput) + 1):
    if numInput % i == 0:
        numberOfPerfectFactors += 1
if numberOfPerfectFactors == 2:
    print("This number is prime.")
else:
    print("This number is not prime.")




# NUMBER 2
# Read an integer from the user
    userInput = int(input("Enter an integer: "))
    
# Check divisors from 2 to the square root of userInput
squarefree = True
for i in range(2, int(userInput**0.5) + 1):
    if userInput % (i * i) == 0:  # Check if userInput is divisible by a perfect square
        squarefree = False
    
# Print the result
if squarefree:
    print("The number is squarefree.")
else:
     print("The number is not squarefree.")