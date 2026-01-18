# Ask the user for a number between 1 and 10
n = int(input("Enter a number between 1 and 10: "))

# Check if the input is within the valid range
if n < 1 or n > 10:
    print("Invalid input. Please restart the program and enter a number between 1 and 10.")
else:
    # Pattern 1: Right-angled triangle made of asterisks
    print("\nPattern 1:")
    for i in range(1, n + 1):
        line = ""
        for j in range(i):
            line = line + "* "
        print(line)

    # Pattern 2: Diamond-like number pattern
    print("\nPattern 2:")

    # First part: Inverted triangle with descending numbers
    for i in range(n, 0, -1):
        line = ""
        line = line + "  " * (n - i)
        for j in range(i, 0, -1):
            line = line + str(j) + " "
        print(line)

    # Second part: Upright triangle with ascending numbers
    for i in range(2, n + 1):
        line = ""
        line = line + "  " * (n - i)
        for j in range(1, i + 1):
            line = line + str(j) + " "
        print(line)
