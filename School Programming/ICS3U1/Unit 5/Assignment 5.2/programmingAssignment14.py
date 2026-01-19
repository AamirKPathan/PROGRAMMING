# Name: Aamir Khan Pathan
# File name: programmingAssignment12.py
# Date: 2025/05/08
# File description: Use Loops and String Functions

# Part 1
print("Part 1")
  # Define Variables
    # Defines String
stringOfLetters = "abcdefghijklmnopqrstuvwxyz"
numberOfLoops = 0 # This loop counter will help move letters to the end
  # Make Loops
for letter in stringOfLetters:
  print(stringOfLetters[numberOfLoops:] + stringOfLetters[0:numberOfLoops]) #Prints the string of letters that havent been first in line yet, and then concantenates the letters that have at the end
  numberOfLoops += 1 # Increases loop counter to move more letters to the back of the line
  
# Part 2
print ("Part 2")
  # Define Variables
numberInput = input("Enter any integer without commas: ")
while True:
  if numberInput != int:
    print("The number you have entered do not match the criteria please try again.")
    numberInput = input("Enter any integer without commas: ")
  break
# Reverse the string to process it from the right
reversedNumber = numberInput[::-1]

# Initialize variables
resultString = ""
digitCount = 0

# Loop through the reversed string and insert commas
for currentDigit in reversedNumber:
    resultString += currentDigit
    digitCount += 1
    if digitCount == 3:
        resultString += ","
        digitCount = 0

# Remove any trailing comma and reverse again
if resultString[-1] == ",":
    resultString = resultString[:-1]

formattedNumber = resultString[::-1]

# Display the result
print ("Formatted number:"), formattedNumber

# Part 3 
print ("Part 3")

# Define time zone offsets in hours relative to Eastern Time
timeZoneOffsets = {
    "Eastern": 0,
    "Central": -1,
    "Mountain": -2,
    "Pacific": -3
}

# Get user input for time, starting zone, and ending zone
timeInput = input("Enter the time (e.g. 3:48pm or 11:26am): ").strip().lower()
startZone = input("Enter the starting time zone (Eastern, Central, Mountain, or Pacific): ").strip()
endZone = input("Enter the ending time zone (Eastern, Central, Mountain, or Pacific): ").strip()

# Check if input time is AM or PM, then remove labels for processing
isPM = "pm" in timeInput
timeInput = timeInput.replace("am", "").replace("pm", "")

# Find colon position to separate hours and minutes
colonPos = timeInput.find(":")
hours = int(timeInput[:colonPos])  # Extract hours
minutes = int(timeInput[colonPos+1:])  # Extract minutes

# Convert 12-hour format to 24-hour format
if isPM and hours != 12:
    hours += 12
elif not isPM and hours == 12:
    hours = 0

# Calculate time difference between zones
offset = timeZoneOffsets[endZone] - timeZoneOffsets[startZone]
hours += offset

# Handle wrap-around for midnight and beyond 24 hours
if hours < 0:
    hours += 24
elif hours >= 24:
    hours -= 24

# Convert back to AM/PM format
if hours == 0:
    formattedTime = "12:" + str(minutes).zfill(2) + "am"
elif hours < 12:
    formattedTime = str(hours) + ":" + str(minutes).zfill(2) + "am"
elif hours == 12:
    formattedTime = "12:" + str(minutes).zfill(2) + "pm"
else:
    formattedTime = str(hours - 12) + ":" + str(minutes).zfill(2) + "pm"

# Display the converted time
print ("Converted time:"), formattedTime
