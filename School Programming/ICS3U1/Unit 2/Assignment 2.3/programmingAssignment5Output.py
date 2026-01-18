# Name: Aamir Khan Pathan
# File name: ProgrammingAssignment5Output.py
# Date: 2025/03/18
# File description: Display the formatted receipt on run window

# Import Module
import math

# Part 1
    # Ask For/Set The Variables
        # Dinner
dinnerPrice = float(input("Enter the price of your dinner before tax: "))
print(dinnerPrice)

        # Dessert
dessertPrice = float(input("Enter the price of your dessert before tax: "))
print(dessertPrice)

        # Musical
musicalPrice = float(input("Enter the price of your Musical before tax: "))
print(musicalPrice)

        # Drinks
drinksPrice = float(input("Enter the price of your drinks before tax: "))
print(drinksPrice)

        # Coffee
coffeePrice = float(input("Enter the price of your coffee before tax: "))
print(coffeePrice)

        # Tax rate
taxRate = 0.13

        # Total Before Tax
totalBeforeTax = dinnerPrice + dessertPrice + musicalPrice + drinksPrice + coffeePrice

        # Total After Tax
totalAfterTax = totalBeforeTax + totalBeforeTax * 0.13

        # Total Tax
totalTax = totalBeforeTax * 0.13

    # Print Receipt
print()
print('Receipt')

        # Header
print("{:<10} {:<10} {:<10} {:<10}".format("Item Name", "Cost", "Tax", "Dinner With Tax"))

        # Line 1
print("{:<10} {:<10.2f} {:<10.2f} {:<10.2f}".format("Dinner", dinnerPrice, dinnerPrice*taxRate, dinnerPrice + (dinnerPrice * taxRate)))

        # Line 2
print("{:<10} {:<10.2f} {:<10.2f} {:<10.2f}".format("Dessert", dessertPrice, dessertPrice*taxRate, dessertPrice + (dessertPrice * taxRate)))

        # Line 3
print("{:<10} {:<10.2f} {:<10.2f} {:<10.2f}".format("Musical", musicalPrice, musicalPrice*taxRate, musicalPrice + (musicalPrice * taxRate)))

        # Line 4
print("{:<10} {:<10.2f} {:<10.2f} {:<10.2f}".format("Drinks", drinksPrice, drinksPrice*taxRate, drinksPrice + (drinksPrice * taxRate)))

        # Line 5
print("{:<10} {:<10.2f} {:<10.2f} {:<10.2f}".format("Coffee", coffeePrice, coffeePrice*taxRate, coffeePrice + (coffeePrice * taxRate)))

        # SUM LINE
print("________________________________________________________________________________________________________________________________")
        
        # TOTALS
print("{:<10} {:<10.2f} {:<10.2f} {:<10.2f}".format("TOTALS", totalBeforeTax, totalTax, totalAfterTax))

print()
print()
print()

# Part 2
    # Ask For / Set The Variables
        # Bicycle
bikingHours = float(input("Enter the hours you biked: "))
print(bikingHours)

        # Swimming
swimmingHours = float(input("Enter the hours you swam: "))
print(swimmingHours)

        # Jogging
joggingHours = float(input("Enter the hours you jogged: "))
print(joggingHours)

        # Bike Calories
bikingCalories = 200 * bikingHours

        # Swimming Calories
swimmingCalories = 275 * swimmingHours

        # Jogging Calories
joggingCalories = 475 * joggingHours


        # Total Calories
totalCalories = bikingCalories + swimmingCalories + joggingCalories

        # Pounds lost
poundsLost = round(totalCalories / 3500, 2)

print("You worked off " + str(poundsLost) + " calories from " + str(totalCalories) + " calories burned")