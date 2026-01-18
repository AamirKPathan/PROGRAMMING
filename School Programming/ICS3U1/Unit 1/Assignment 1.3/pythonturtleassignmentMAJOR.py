# Import Turtle and time and hide turtle
import turtle
import time

# House 1
      # Draw Sky
            # Set Pencolor
turtle.pencolor('cyan')

            # Go To Top Left Corner For Starting Position
turtle.penup()
turtle.goto(-200,200) # Starting position is (-200,200)
turtle.pendown()

            # Begin The Fill for the sky and draw the sky
                  # Begin Fill
turtle.fillcolor('cyan')
turtle.begin_fill()

                  # Draw Sky (Draw Rectangle 400 X 300)
turtle.goto(200,200)
turtle.goto(200,-100)
turtle.goto(-200,-100)
turtle.goto(-200,200)

                  # Ends Fill
turtle.end_fill()

      # Draw Grass
            # Set pencolor
turtle.pencolor('green')

            # Go To Bottom Left Corner Of Sky For Starting Position Of Grass
turtle.penup()
turtle.goto(-200,-100) # Goes to (-200,-100)
turtle.pendown()

            # Begin Fill For The Grass And Draw The Grass
                  # Begin Fill
turtle.fillcolor('green')
turtle.begin_fill()

                  # Draw Grass ( Draw Rectangle 400X100)
turtle.goto(200,-100)
turtle.goto(200,-200)
turtle.goto(-200,-200)
turtle.goto(-200,-100)

                  # Ends Fill
turtle.end_fill()

      # Draw Sun
            # Go To Starting Position (-145,12)
turtle.penup()
turtle.goto(-145,120) # This is the starting position
turtle.pendown()

            # Set Pencolor
turtle.pencolor('yellow')

            # Start Fill And Draw
                  # Start Fill
turtle.fillcolor('yellow')
turtle.begin_fill()

                  # Begin Drawing (Circle radius 35 pixel)
turtle.circle(35) #this is the circle

                  # End Fill
turtle.end_fill()

      # Draw Cloud
            # Go To Staarting Position
turtle.penup()
turtle.goto(70,120)
turtle.pendown

            # Sets the desired angle
turtle.left(180)

            #Set Fill Color And Begin Fill
turtle.fillcolor('white')
turtle.begin_fill()

            # Set Pencolor
turtle.pencolor('white')

            # Draw Circles For Clouds
                  # Circle 1
turtle.circle(35)
turtle.forward(35)

      # Ends Fill
turtle.end_fill()
                  # CIrcle 2
                        # Begins Fill
                        # No need to reset fill color since color is same
turtle.begin_fill()
                        # Sets desired angle
turtle.right(90)
                        # Draw Circle (Radius 35)
turtle.circle(35)
                        # Ends Fill
turtle.end_fill ()

                  # CIrcle 2
                        # Begins Fill
                        # No need to reset fill color since color is same
turtle.begin_fill()
                        # Sets desired angle
turtle.right(90)
                        # Draw Circle (Radius 35)
turtle.circle(35)
                        # Ends Fill
turtle.end_fill()
                  # CIrcle 3
                        # Begins Fill
                        # No need to reset fill color since color is same
turtle.begin_fill()
                        # Sets desired angle
turtle.right(90)
                        # Draw Circle (Radius 35)
turtle.circle(35)
                        # Ends Fill
turtle.end_fill()

                  # CIrcle 4
                        # No need to reset fill color since color is same
                        # Begins Fill
turtle.begin_fill()
                        # Sets desired angle
turtle.right(90)
                        # Draw Circle (Radius 35)
turtle.circle(35)
                        # Ends Fill
turtle.end_fill()

                  # CIrcle 5
                        # Begins Fill
                        # No need to reset fill color since color is same
turtle.begin_fill()
                        # Sets desired angle
turtle.right(90)
                        # Draw Circle (Radius 35)
turtle.circle(35)
                        # Ends Fill
turtle.end_fill()

      # Draw Flag Pole (Rectangle 5X200)
            # Go To Starting Point, Readjust angle, And Reset Colours As Desired (Silver)
                  # Go To Starting Point
turtle.penup()
turtle.goto(50,-110)
turtle.pendown()

                  # Pencolor
turtle.pencolor('Silver')

                  # Fill Color
turtle.fillcolor('silver')

            # Begin Flag Pole (5X200)
                  # Begin Fill
turtle.begin_fill()
turtle.forward(200)
turtle.left(90)
turtle.forward(5)
turtle.left(90)
turtle.forward(200)
turtle.left(90)
turtle.forward(5)
turtle.end_fill()

                  # End Fill
turtle.end_fill()

      # Make Flag Pole ball
            # Go To Flag Pole Ball Position
turtle.penup()
turtle.goto(47.5,90)
turtle.pendown()

            # Start Fill
            #No need to set fill color since color is still same
turtle.begin_fill()

            # Start Drawing (Circle radius 5)
turtle.circle(5)

            # End Fill
turtle.end_fill()

      # Draw Bangladesh Flag
            # Go To Starting Position For Rectangle
turtle.penup()
turtle.goto(50,90)
turtle.pendown()

            # Set Color For Flag
                  # Set Pen Color
turtle.pencolor('forest green')
                  
                  #Set Fill color
turtle.fillcolor('forest green')

            # Draw Green Rectangle (100X60)
            # Begin Fill
turtle.begin_fill()
turtle.goto(150,90)
turtle.goto(150,30)
turtle.goto(50,30)
turtle.goto(50,90)

            # End Fill
turtle.end_fill()

            # Go To Second Starting Position For Circle
turtle.penup()
turtle.goto(115,60)
turtle.pendown()

                  # Set Colours
                        # Set Pencolor
turtle.pencolor('red')

                        # Set fill color
turtle.fillcolor('red')

                        # Begin Fill
turtle.begin_fill()

                  # Reset Angle
turtle.left(90)

                  # Draw Red Circle ( Radius 20)
turtle.circle(20)
turtle.end_fill()

      # Draw House
            # Draw Structure Rectangle (210X150)
                  # Go To Starting Point
turtle.penup()
turtle.goto(-190,-110)
turtle.pendown()

                  # Set Colors
                        # Pen Color
turtle.pencolor('firebrick')

                        # Fill Color
turtle.fillcolor('firebrick')

                  # Begin Drawing Rectangle (210X150)
                        # Begin Fill
turtle.begin_fill()
turtle.goto(-190,40)
turtle.goto(20,40)
turtle.goto(20,-110)
turtle.goto(-190,-110)

                        # End Fill
turtle.end_fill()

      # Draw Roof (Isosceles Triangle 30 deg, 30 deg, 120 deg: 119.125, 119.125, 190)
            # Go To Starting Point
turtle.penup()
turtle.goto(-190,40)
turtle.pendown()

            # Set Colors
                  # Pen Color
turtle.pencolor('slategray')
                  
                  # Fill Color
turtle.fillcolor('slategray')
                  
            # Start Drawing
                  # Begin Fill
turtle.begin_fill()
turtle.right(60)
turtle.forward(119.125)
turtle.right(60)
turtle.forward(119.125)
turtle.goto(-190,40)

                  # End fill
turtle.end_fill()

      # Draw Window 1 50X50 SQUARE
            # Go To Starting Point
turtle.penup()
turtle.goto(10,-60)
turtle.pendown()

            # Reset Angle
turtle.left(120)

            # Set Colors
                  # Pen Color
turtle.pencolor('Black')

                  # Fill Color
turtle.fillcolor('skyblue')

            # Start Drawing
                  # Begin Fill
turtle.begin_fill()
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)

                  # End Fill
turtle.end_fill()

            # Draws Window Frame
turtle.forward(25)
turtle.left(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.forward(50)
turtle.left(180)

      # Draw Window 2 50X50 SQUARE
            # Go To Starting Point
turtle.penup()
turtle.goto(-50,-60)
turtle.pendown()

            # Set Colors
                  # Pen Color
turtle.pencolor('Black')

                  # Fill Color
turtle.fillcolor('skyblue')

            # Start Drawing
                  # Begin Fill
turtle.begin_fill()
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)
turtle.forward(50)
turtle.left(90)

                  # End Fill
turtle.end_fill()

            # Draws Window Frame
turtle.forward(25)
turtle.left(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.forward(50)
turtle.left(180)

      # Draw Door
            # Go To Starting Point
turtle.penup()
turtle.goto(-180,-110)
turtle.pendown()

            # Set Colors
                  # Leave pen black for door frame
turtle.fillcolor('tan')

            # Start Drawing
                  # Begin Fill
turtle.begin_fill()
turtle.forward(100)
turtle.right(90)
turtle.forward(50)
turtle.right(90)
turtle.forward(100)
turtle.right(90)
turtle.forward(50)

                  # End Fill
turtle.end_fill()

            #Draw Doorknob
                  # Set Fill Color
turtle.fillcolor('black')

                  # Go To Position
turtle.penup()
turtle.goto(-165,-55)
turtle.pendown()

                  # Begin Drawing Circle ( Radius 5)
                        # Begin Fill
turtle.begin_fill()
turtle.circle(5)
                        
                        # End Fill
turtle.end_fill()

                        # BREAK!
time.sleep(5)

                        # RESET SCREEN!
turtle.reset()

# House 2
      # Set Background For Sky
turtle.Screen().bgcolor('cyan')

      # Draw The Island
            # Go To Starting Position
turtle.penup()
turtle.goto(-100,-150)
turtle.pendown()

            # Set Colors
                  # Pen Color
turtle.pencolor('gray')

                  # Fill Color
turtle.fillcolor('gray')

            # Begin Drawing
                  # Begin Fill
turtle.begin_fill()
turtle.right(45)
turtle.circle(150,90)
turtle.circle(75,90)
turtle.circle(150,90)
turtle.circle(75,90)

                  # End Fill
turtle.end_fill()

      # Draw the water
            # Go To Starting Point
turtle.penup()
turtle.goto(-200,-50)
turtle.pendown()
            # Readjust angle
turtle.left(45)
            # Set Colours
                  # Pen Colour
turtle.pencolor('blue')

                  # Fill Colour
turtle.fillcolor('blue')

            # Begin Drawing Rectangle 400X150
                # Begin Fill
turtle.begin_fill()
turtle.goto(-200,-200)
turtle.goto(200,-200)
turtle.goto(200,-50)
turtle.goto(-200,-50)

                  # End Fill
turtle.end_fill()

      # Draw House
            # Draw Structure
                  # Go To Position
turtle.penup()
turtle.goto(-75,-25)
turtle.pendown()

                  # Set Colours
                        #Fill Color
turtle.fillcolor('firebrick')

                        #Pen Color
turtle.pencolor('firebrick')

                  # Begin Fill
turtle.begin_fill()

                  # Draw Rectangle 50X150
turtle.goto(-75,125)
turtle.goto(-25,125)
turtle.goto(-25,-25)
turtle.goto(-75,-25)

                  # End Fill
turtle.end_fill()

            # Draw Windows 10X10
                  # Window 1
                        # Go To Starting Point
turtle.penup()
turtle.goto(-70,120)
turtle.pendown()

                        # Set Colours
                              # Pen Color
turtle.pencolor('black')

                              # Fill Color
turtle.fillcolor('skyblue')

                        # Begin Fill
turtle.begin_fill()
                  
                        # Draw Window
turtle.forward(10)
turtle.right(90)
turtle.forward(10)
turtle.right(90)
turtle.forward(10)
turtle.right(90)
turtle.forward(10)
turtle.right(90)
                        # End Fill
turtle.end_fill()

                  # Window 2
                        # Go To Starting Point
turtle.penup()
turtle.goto(-30,120)
turtle.pendown()

                        # Adjust Angle
turtle.left(180)

                        # Set Colours
                        # No need same colours as previous
                        # Begin Fill
turtle.begin_fill()

                        # Draw Window
turtle.forward(10)
turtle.left(90)
turtle.forward(10)
turtle.left(90)
turtle.forward(10)
turtle.left(90)
turtle.forward(10)
turtle.left(90)

                        # End Fill
turtle.end_fill()

            # Draw Door
                  # Go To Position
turtle.penup()
turtle.goto(-60,-25)
turtle.pendown()

                  # Adjust Angles
turtle.right(180)

                  # Set Colours
turtle.pencolor('white')
turtle.fillcolor('white')

                  # Begin Fill
turtle.begin_fill()

                  # Draw Door 20X80

turtle.forward(20)
turtle.left(90)
turtle.forward(80)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(80)

                  # End Fill
turtle.end_fill()

            # Draw Roof
                  # Gp To position
turtle.penup()
turtle.goto(-95,125)
turtle.pendown()

                  # Adjust angles
turtle.left(90)

                  # Set Colors'
turtle.pencolor('tan')
turtle.fillcolor('tan')

                  # Begin Fill
turtle.begin_fill()

                  # BEgin Drawing
turtle.left(45)
turtle.forward(63.625)
turtle.right(90)
turtle.forward(63.625)
turtle.right(135)
turtle.forward(90)

                  # End Fill
turtle.end_fill()

            # Draw Bushes
                  # Go To location
turtle.penup()
turtle.goto(10,20)
turtle.pendown()

                  # Set Color
turtle.pencolor('green')
turtle.fillcolor('green')
                  # Begin Fill
turtle.begin_fill()
                  # Circle 1
turtle.circle(10)
turtle.end_fill()

                  # Circle 2
turtle.begin_fill()
turtle.forward(10)
turtle.circle(10)
turtle.end_fill()

                  # CIrcle 3
turtle.begin_fill()
turtle.forward(10)
turtle.circle(10)
turtle.end_fill()

            # Draw Clouds
                  # Go To Starting
turtle.penup()
turtle.goto(-200,190)
turtle.pendown()
turtle.right(225)

                  # Set Colors
turtle.fillcolor('white')
turtle.pencolor('white')

                  # Cloud 1
                        # Draw
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()
turtle.penup()
turtle.forward(25)
turtle.right(90)
turtle.forward(5)
turtle.left(90)
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()
turtle.penup()
turtle.forward(5)
turtle.left(90)
turtle.forward(25)
turtle.right(90)
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()

                  # CLoud 2
turtle.penup()
turtle.goto(-200,140)
turtle.pendown()
                        # Draw
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()
turtle.penup()
turtle.forward(25)
turtle.right(90)
turtle.forward(5)
turtle.left(90)
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()
turtle.penup()
turtle.forward(5)
turtle.left(90)
turtle.forward(25)
turtle.right(90)
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()

                  # Cloud 3
turtle.penup()
turtle.goto(-200,90)
turtle.pendown()
                        # Draw
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()
turtle.penup()
turtle.forward(25)
turtle.right(90)
turtle.forward(5)
turtle.left(90)
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()
turtle.penup()
turtle.forward(5)
turtle.left(90)
turtle.forward(25)
turtle.right(90)
turtle.begin_fill()
turtle.circle(50,90)
turtle.circle(5,90)
turtle.circle(50,90)
turtle.circle(5,90)
turtle.end_fill()

      # Draw Sun
            # Go TO Position
turtle.left(45)
turtle.penup()
turtle.goto(160,160)
turtle.pendown()
            # Set Colors
turtle.pencolor('yellow')
turtle.fillcolor('yellow')
            # Draw
turtle.begin_fill()
turtle.circle(20)
turtle.end_fill()

# THis keeps screen visible
turtle.done()