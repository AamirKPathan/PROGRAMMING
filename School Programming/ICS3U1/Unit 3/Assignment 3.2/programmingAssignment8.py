 # Name: Aamir Khan Pathan
# File Name: programmingAssignment8.py
# Date: 2025/04/02
#File Description: Use elif and ifelse statements

# Assignment 1
  # Get Variables
year = int(input("Please enter a year:  "))

  # Make Calculations
if year % 4 == 0 and year % 400 == 0:
  print("The year " + str(year) + " is/was a leap year")
else:
  print("The year " + str(year) + " is/was not a leap year.\n\n")
  
# Assignment 2
  # Get Variables And Inputs
testNumber = int(input("What test is this?  "))
mark = float(input("What was your percentage mark?  "))
if testNumber == 1:
  weightedMark = mark * 0.1
elif testNumber == 2 or 3 or 6:
  weightedMark = mark * 0.2
elif testNumber == 4 or 5:
  weightedMark = mark * 0.15
else:
  print("There is no test number" + str(testNumber))
  
print("A score of " + str(mark) + " on test " + str(testNumber) + " will be weighted to " + str(weightedMark) + "%.")