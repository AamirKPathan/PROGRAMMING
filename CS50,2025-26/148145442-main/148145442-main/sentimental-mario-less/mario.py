def get_int(prompt):
    while True:
        try:
            value = int(input(prompt))
            if 1 <= value <= 8:
                return value
        except ValueError:
            pass  # Ignore non-integer input
        # Re-prompt if input is invalid
        print("Invalid input. Please enter an integer between 1 and 8.")

def main():
    height = get_int("Height: ")

    for i in range(1, height + 1):
        spaces = height - i
        hashes = i
        print(" " * spaces + "#" * hashes)

if __name__ == "__main__":
    main()
