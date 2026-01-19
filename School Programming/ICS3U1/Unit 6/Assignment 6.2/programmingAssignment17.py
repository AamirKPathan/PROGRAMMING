# Function 1
    # Define Function
print("Function 1")
def isPerfectNum(n):
    if n < 2:
        return False
    sum_divisors = 0
    for i in range(1, n):
        if n % i == 0:
            sum_divisors += i
    return sum_divisors == n
    # Get user input
num = int(input("Enter a integer: ")) 
    # Call the function and print the result
if isPerfectNum(num):
    print("True")
else:
    print("False")
# Function 2
print("Function 2")
    # Define Function
def digit(n, position):
    # Extract the digit at the specified position
    if ((n // 10**position) % 10) > 0:
        return (n // 10**position) % 10
    else:
        print("0, not found")
# Define the number and position
num = int(input("Enter an integer: ")) 
pos = int(input("Enter the position: "))  

# Call the function and print the result
print(digit(num, pos))


# Function 3
  # Define Function
print("Function 3")
def isSquare(n):
    if type(n ** 0.5) == int:  # Check if square root is a whole number
        return True
    else:
        return False

n = int(input("Enter an integer: "))
print(isSquare(n))

# Function 4
    # Define Function
def leastFactor(n):
    if n <= 1:
        return 0

    # Find the greatest prime factor
    greatest_prime = 1
    while n % 2 == 0:
        greatest_prime = 2
        n //= 2

    # Check odd factors
    for factor in range(3, n + 1, 2):
        while n % factor == 0:
            greatest_prime = factor
            n //= factor

    return greatest_prime
n = int(input("Enter an Integer"))
print(leastFactor(n))