# sentimental-cash/cash.py

from cs50 import get_float

def main():
    # Prompt user until a non-negative value is entered
    while True:
        try:
            dollars = get_float("Change owed: ")
            if dollars >= 0:
                break
        except:
            continue

    # Convert dollars to cents and round to avoid floating-point imprecision
    cents = round(dollars * 100)

    # Initialize coin counter
    coins = 0

    # Calculate minimum number of coins
    for coin in [25, 10, 5, 1]:
        coins += cents // coin
        cents %= coin

    # Output the result
    print(coins)

if __name__ == "__main__":
    main()
