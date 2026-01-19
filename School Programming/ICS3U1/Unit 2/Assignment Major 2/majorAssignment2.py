# Name: Aamir Khan Pathan
# File name: ProgrammingAssignment6Output.py
# Date: 2025/03/25
# File description: Display the calculations on screen

# Challenge 1
    # Welcome screen
print("Welcome to the program,\n Please enter the prices for 4 items along with the name of each item till 2 decimal points ")
    # Input And Set Variables
        #Name
name = input("Please enter your name: ")
print (name)

        # Item 1
itemOne = input("Enter the name of your item: ")
print(itemOne)
itemOnePrice = float(input("Enter the price of the " + itemOne + "(s) :"))
print(itemOnePrice)

        # Item 2
itemTwo = input("Enter the name of your item: ")
print(itemTwo)
itemTwoPrice = float(input("Enter the price of the " + itemTwo + "(s) :"))
print(itemTwoPrice)

        # Item 3
itemThree = input("Enter the name of your item: ")
print(itemThree)
itemThreePrice = float(input("Enter the price of the " + itemThree + "(s) :"))
print(itemThreePrice)

        # Item 4
itemFour = input("Enter the name of your item: ")
print(itemFour)
itemFourPrice = float(input("Enter the price of the " + itemFour +  "(s) :"))
print(itemFourPrice)

        # Tax rate
taxRate = 0.13

        # Total Before Tax
totalBeforeTax = itemOnePrice + itemTwoPrice + itemThreePrice + itemFourPrice

        # Total After Tax
totalAfterTax = totalBeforeTax + totalBeforeTax * taxRate

        # Total Tax
totalTax = totalBeforeTax * taxRate

    # Print Receipt
print()
print('                   Sales Summary For ' + name + "\n\n")

        # Header
print("{:<20} {:<20} {:<20} {:<20}".format("Item", "Price($)", "Tax($)", "Total($)"))
print("________________________________________________________________________________")
print("")
print("")

        # Line 1
print("{:<20} {:<20.2f} {:<20.2f} {:<20.2f}".format(itemOne, itemOnePrice, itemOnePrice * taxRate, itemOnePrice + itemOnePrice * taxRate))

        # Line 2
print("{:<20} {:<20.2f} {:<20.2f} {:<20.2f}".format(itemTwo, itemTwoPrice, itemTwoPrice * taxRate, itemTwoPrice + itemTwoPrice * taxRate))

        # Line 3
print("{:<20} {:<20.2f} {:<20.2f} {:<20.2f}".format(itemThree, itemThreePrice, itemThreePrice * taxRate, itemThreePrice + itemThreePrice * taxRate))

        # Line 4
print("{:<20} {:<20.2f} {:<20.2f} {:<20.2f}".format(itemFour, itemFourPrice, itemFourPrice * taxRate, itemFourPrice + itemFourPrice * taxRate))

        # SUM LINE
print("________________________________________________________________________________________________________________________________")
        
        # TOTALS
print("{:<20} {:<20.2f} {:<20.2f} {:<20.2f}".format("Grand Total", totalBeforeTax, totalTax, totalAfterTax))
print("Thank You For Using The Receipt Maker!")
print("")
print("")
print("")

# Challenge 2
    # Welcome screen
print("Welcome to the program,\n Please enter the wages of 5 employees, their names, and hourly rate of pay")

    # Input And Set Variables
        # Employee 1
employeeOneFamilyName = input("Enter the family name of your first employee: ")
employeeOneGivenName = input("Enter the given name of your first employee: ")
employeeOneHourlyRate = float(input("Enter the hourly rate of your first employee: "))
employeeOneHoursWorked = float(input("Enter the number of hours your employee has worked this week: "))
employeeOneIncomeTaxRate = float(input("Enter the income tax rate of your first employee in %. (Do not add the percent symbol)"))

        # Employee 2
employeeTwoFamilyName = input("Enter the family name of your second employee: ")
employeeTwoGivenName = input("Enter the given name of your second employee: ")
employeeTwoHourlyRate = float(input("Enter the hourly rate of your second employee: "))
employeeTwoHoursWorked = float(input("Enter the number of hours your employee has worked this week: "))
employeeTwoIncomeTaxRate = float(input("Enter the income tax rate of your second employee in %. (Do not add the percent symbol)"))

        # Employee 3
employeeThreeFamilyName = input("Enter the family name of your third employee: ")
employeeThreeGivenName = input("Enter the given name of your third employee: ")
employeeThreeHourlyRate = float(input("Enter the hourly rate of third first employee: "))
employeeThreeHoursWorked = float(input("Enter the number of hours your employee has worked this week: "))
employeeThreeIncomeTaxRate = float(input("Enter the income tax rate of your third employee in %. (Do not add the percent symbol)"))

        # Employee 4
employeeFourFamilyName = input("Enter the family name of your fourth employee: ")
employeeFourGivenName = input("Enter the given name of your fourth employee: ")
employeeFourHourlyRate = float(input("Enter the hourly rate of your fourth employee: "))
employeeFourHoursWorked = float(input("Enter the number of hours your employee has worked this week: "))
employeeFourIncomeTaxRate = float(input("Enter the income tax rate of your fourth employee in %. (Do not add the percent symbol)"))

        #Employee 51
      
employeeFiveFamilyName = input("Enter the family name of your fifth employee: ")
employeeFiveGivenName = input("Enter the given name of your fifth employee: ")
employeeFiveHourlyRate = float(input("Enter the hourly rate of your fifth employee: "))
employeeFiveHoursWorked = float(input("Enter the number of hours your employee has worked this week: "))
employeeFiveIncomeTaxRate = float(input("Enter the income tax rate of your fifth employee in %. (Do not add the percent symbol)"))

    # Print Chart
print("")
print("")

        # Header
print("{:<16} {:<16} {:<16} {:<16} {:<16} {:<16}".format ("Name", "Pay-Rate($)", "Work-Hours", "Gross-Pay($)", "Income-Tax($)", "Net Pay($)"))
print("________________________________________________________________________________________________________________________________________________________________")

        # Employee 1
print("{:<16} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f}".format(employeeOneGivenName + " " + employeeOneFamilyName,employeeOneHourlyRate, employeeOneHoursWorked, employeeOneHoursWorked * employeeOneHourlyRate, (employeeOneHourlyRate*employeeOneHoursWorked)* (employeeOneIncomeTaxRate/100), (employeeOneHoursWorked * employeeOneHourlyRate)-(employeeOneHourlyRate*employeeOneHoursWorked)* (employeeOneIncomeTaxRate/100)))

        # Employee 2
print("{:<16} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f}".format(employeeTwoGivenName + " " + employeeTwoFamilyName,employeeTwoHourlyRate, employeeTwoHoursWorked, employeeTwoHoursWorked * employeeTwoHourlyRate, (employeeTwoHourlyRate*employeeTwoHoursWorked)* (employeeTwoIncomeTaxRate/100), (employeeTwoHoursWorked * employeeTwoHourlyRate)-(employeeTwoHourlyRate*employeeTwoHoursWorked)* (employeeTwoIncomeTaxRate/100)))

        # Employee 3
print("{:<16} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f}".format(employeeThreeGivenName + " " + employeeThreeFamilyName,employeeThreeHourlyRate, employeeThreeHoursWorked, employeeThreeHoursWorked * employeeThreeHourlyRate, (employeeThreeHourlyRate*employeeThreeHoursWorked)* (employeeThreeIncomeTaxRate/100), (employeeThreeHoursWorked * employeeThreeHourlyRate)-(employeeThreeHourlyRate*employeeThreeHoursWorked)* (employeeThreeIncomeTaxRate/100)))


        # Employee 4
print("{:<16} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f}".format(employeeFourGivenName + " " + employeeFourFamilyName,employeeFourHourlyRate, employeeFourHoursWorked, employeeFourHoursWorked * employeeFourHourlyRate, (employeeFourHourlyRate*employeeFourHoursWorked)* (employeeFourIncomeTaxRate/100), (employeeFourHoursWorked * employeeFourHourlyRate)-(employeeFourHourlyRate*employeeFourHoursWorked)* (employeeFourIncomeTaxRate/100)))

        # Employee 5
print("{:<16} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f} {:<16.2f}".format(employeeFiveGivenName + " " + employeeFiveFamilyName,employeeFiveHourlyRate, employeeFiveHoursWorked, employeeFiveHoursWorked * employeeFiveHourlyRate, (employeeFiveHourlyRate*employeeFiveHoursWorked)* (employeeFiveIncomeTaxRate/100), (employeeFiveHoursWorked * employeeFiveHourlyRate)-(employeeFiveHourlyRate*employeeFiveHoursWorked)* (employeeFiveIncomeTaxRate/100)))
        
        # TOTALS
print("Thank You For Using The Pay Slip Creator!")