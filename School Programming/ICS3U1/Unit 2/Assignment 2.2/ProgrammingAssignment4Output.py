#Name: Aamir Khan Pathan
#File name: ProgrammingAssignment4Output.py
#date: 2025/0305
#File discription: Display the formated message on run window

# import math
import math
# begin
    # a. Display equivalent of each algebra statement
print("a.")
print()
        #(2 + 4 **3) / 3     = 

        #Square root of 112  = 

        #7's power of 5      = 

        #The remainder of 11 divided by 3 =




        # a.i (2 + 4 **3) / 3     =
print("{:5}".format("(2 + 4 **3) / 3     =     ") + "{:5}".format((2 + 4 **3) / 3) )

            # Newline
print()

        # a.ii Square root of 112     = 
print("{:5}".format("Square root of 112     =     ") + "{:5}".format(round(math.sqrt(112), 3)))
            
            # Newline
print()

        # a.iii 7's power of 5     = 
print("{:5}".format("7's power of 5     =     ") + "{:5}".format(7 ** 5))
            
            # Newline 
print()

      # a.iv The remainder of 11 divided by 3     = 
print("{:5}".format("The remainder of 11 divided by 3     =     ") + "{:5}".format(11 % 3))
            
            # Newline 
print()

    # b. Multiplication Chart 10X10
print("b.")
print()

        #Line 1
print("{:5}".format(1) + "{:5}".format(2) + "{:5}".format(3) + "{:5}".format(4) + "{:5}".format(5) + "{:5}".format(6) + "{:5}".format(7) + "{:5}".format(8) + "{:5}".format(9) + "{:5}".format(10))
        #Line 2
print("{:5}".format(2) + "{:5}".format(4) + "{:5}".format(6) + "{:5}".format(8) + "{:5}".format(10) + "{:5}".format(12) + "{:5}".format(14) + "{:5}".format(16) + "{:5}".format(18) + "{:5}".format(20))
        #Line 3
print("{:5}".format(3) + "{:5}".format(6) + "{:5}".format(9) + "{:5}".format(12) + "{:5}".format(15) + "{:5}".format(18) + "{:5}".format(21) + "{:5}".format(24) + "{:5}".format(27) + "{:5}".format(30))
        #Line 4
print("{:5}".format(4) + "{:5}".format(8) + "{:5}".format(12) + "{:5}".format(16) + "{:5}".format(20) + "{:5}".format(24) + "{:5}".format(28) + "{:5}".format(32) + "{:5}".format(36) + "{:5}".format(40))
        #Line 5
print("{:5}".format(5) + "{:5}".format(10) + "{:5}".format(15) + "{:5}".format(20) + "{:5}".format(25) + "{:5}".format(30) + "{:5}".format(35) + "{:5}".format(40) + "{:5}".format(45) + "{:5}".format(50))
        #Line 6
print("{:5}".format(6) + "{:5}".format(12) + "{:5}".format(18) + "{:5}".format(24) + "{:5}".format(30) + "{:5}".format(36) + "{:5}".format(42) + "{:5}".format(48) + "{:5}".format(54) + "{:5}".format(60))
        #Line 7
print("{:5}".format(7) + "{:5}".format(14) + "{:5}".format(21) + "{:5}".format(28) + "{:5}".format(35) + "{:5}".format(42) + "{:5}".format(49) + "{:5}".format(56) + "{:5}".format(63) + "{:5}".format(70))
        #Line 8
print("{:5}".format(8) + "{:5}".format(16) + "{:5}".format(24) + "{:5}".format(32) + "{:5}".format(40) + "{:5}".format(48) + "{:5}".format(56) + "{:5}".format(64) + "{:5}".format(72) + "{:5}".format(80))
        #Line 9
print("{:5}".format(9) + "{:5}".format(18) + "{:5}".format(27) + "{:5}".format(36) + "{:5}".format(45) + "{:5}".format(54) + "{:5}".format(63) + "{:5}".format(72) + "{:5}".format(81) + "{:5}".format(90))
        #Line 10
print("{:5}".format(10) + "{:5}".format(20) + "{:5}".format(30) + "{:5}".format(40) + "{:5}".format(50) + "{:5}".format(60) + "{:5}".format(70) + "{:5}".format(80) + "{:5}".format(90) + "{:5}".format(100))

    # c. Receipt
print("c.")
print()
        #             Woburn C.I. Music Invoice
        # 
        #
        #     3    Guitars        at   $  350.00  =   $1050.00
        #
        #
        #     3    Keyboards      at   $ 1250.00  =   $2500.00   
        #
        #
        #     3    Amplifier      at   $  195.00  =   $ 195.00
        #
        #
        #
        #                                         TOTAL  =   $ 3745.00

        # Print Line 1
print("{:13}".format("") + "Woburn C.I.  Music Invoice")
print("")
print("")
print("{:5}".format(3) + "{:4}".format("") + "Guitars        " + "at   " + "${:7}".format(350.00) + "  =  " + "${:7}".format(1050.00))
print("")
print("{:5}".format(2) + "{:4}".format("") + "Keyboards      " + "at   " + "${:7}".format(1250.00) + "  =  " + "${:7}".format(2500.00))
print("")
print("{:5}".format(1) + "{:4}".format("") + "Amplifier      " + "at   " + "${:7}".format(195.00) + "  =  " + "${:7}".format(195.00))
print("")
print("")
print("")
print("{:40}".format("") + "TOTAL   =  " + "${:7}".format(3745.00))