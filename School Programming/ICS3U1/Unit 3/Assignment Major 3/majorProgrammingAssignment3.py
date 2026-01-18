 # Name: Aamir Khan Pathan
# File Name: majorProgrammingAssignment3.py
# Date: 2025/07/02
#File Description: Use elif and ifelse statements

# Coin Counter
  # Ask For Inputs And Set Variables
numberOfCents = int(input("Input the amount of cents(above 0 and lower than 100): "))
quarterValue = 25
dimeValue = 10
nickelValue = 5

if numberOfCents >= 100 or numberOfCents <=0:
  print("You did not follow the instructions. Please try again.")
  exit()

  #Calculations
numberOfQuarters = numberOfCents // quarterValue
centsRemainingAfterQuarters = numberOfCents % quarterValue

numberOfDimes = centsRemainingAfterQuarters // dimeValue
centsRemainingAfterDimes = centsRemainingAfterQuarters % dimeValue

numberOfNickels = centsRemainingAfterDimes // nickelValue
centsRemainingAfterNickels = centsRemainingAfterDimes % nickelValue

  # Make IfElse and ElIf statements
output = str(numberOfCents) + " cents: "
if numberOfQuarters > 0:
  output += str(numberOfQuarters) + " quarter"
  if numberOfQuarters > 1:
    output += "s"

if numberOfDimes > 0:
  output += ", " + str(numberOfDimes) + " dime"
  if numberOfDimes > 1:
    output += "s"

if numberOfNickels > 0:
  output += ", " + str(numberOfNickels) + " nickel"
  if numberOfNickels > 1:
    output += "s"

if centsRemainingAfterNickels > 0:
  output += ", " + str(centsRemainingAfterNickels) + " cent"
  if centsRemainingAfterNickels > 1:
    output += "s"

print(output)