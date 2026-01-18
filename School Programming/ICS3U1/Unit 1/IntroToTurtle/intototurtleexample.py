#Name: Mr.Li
#File name: fillColor.py
#date: 2019/0821
#File desciption: how to set up a window size in Python Turtle


import turtle

#Set up the window to 640 and 480 pixels
turtle.setup(640, 480)

#draw a line forward by 310 pixels
turtle.forward(100)

#chane direction to right by 90 degrees
turtle.right (90)

#draw a line forward by 240 pixels
turtle.forward(120)

turtle.right (90)


turtle.forward(100)

turtle.right (90)

#end of rectangle
turtle.forward(120)

#lift the pen up
turtle.penup()

#go to point at (-100, 100)
turtle.goto(-100, 100)

turtle.pendown()

turtle.circle(50)

#end turtle
turtle.done()
