# Name: Aamir Khan Pathan
# File name: ProgrammingAssignment7.py
# Date: 2025/03/31
# File description: Display prices


# Make Receipts
    # Assignment 1
        # Get Inputs And Set Variables
            # Inputs number of pencils
numberOfPencils = int(input("Enter the number Of Pencils Purchased: "))

            # Calculates the price per pencil
if numberOfPencils <= 9:
    costPerPencil = 0.12
else:
    costPerPencil = 0.10
taxRate = 0.13
totalCost = numberOfPencils * costPerPencil
tax = totalCost * taxRate
grandTotal = tax + totalCost

print("{:<30}{:<30}".format("Number Of Pencils:", numberOfPencils))
print("{:<30}{:<30}".format("Cost Per Pencil:", costPerPencil))
print("{:<30}{:<30}".format("Total Cost:", totalCost))
print("{:<30}{:<30.2f}".format("Tax:", tax))
print("{:<30}{:<30.2f}".format("Grand Total:", grandTotal))

    # Assignment 2
numberOfMinutes = int(input("Enter the number Of Minutes On Call: "))
prePaidRate = 0.99
prePaidMinutes = 10
extraRate = 0.05
if numberOfMinutes <= 10:
    prePaid = 0.99
    print("Your bill is $" + str(prePaidRate) + ".")
else:
    print("You went over your limit.")
    print("Your bill is $" + str(((numberOfMinutes - prePaidMinutes) * extraRate) + prePaidRate) + ".")