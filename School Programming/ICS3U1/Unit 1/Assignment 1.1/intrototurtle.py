#Name: Aamir Khan Pathan
#File name: intrototurtle.py
#date: 2025/0218
#File desciption: Assignment 1: Intro To Turtle

import turtle
#Start in top left corner
turtle.penup()
turtle.goto(-200,200)
#Draw First Isosceles triangle
  #Draw Base 150 pixels
turtle.pendown()
turtle.goto(-50,200)
  #Draw Leg 1, 200 pixels
turtle.right(112.024)
turtle.forward(200)
  #Draw Leg 2, 200 Pixels
turtle.write('Isosceles, 150, 200, 200')
#Reset Direction To North
turtle.left(112.024)
turtle.goto(-200,200)

#Draw Equilateral Triangle
  #Go To Starting Point
turtle.penup()
turtle.goto(200,200)
turtle.pendown()
  #Draw First Leg
turtle.right(120)
turtle.forward(180)
  #Draw Second Leg
turtle.right(120)
turtle.write('Equilateral 180')
turtle.forward(180)
  #Draw Third Leg
turtle.goto(200,200)

#Draw Rectangle
  #Go to Far Left Wall To Start
turtle.penup()
turtle.goto(-200,0)
turtle.pendown()
turtle.right(120)
turtle.write('Rectangle 200*300')
turtle.forward(300)
turtle.right(90)
turtle.forward(200)
turtle.right(90)
turtle.forward(300)
turtle.right(90)
turtle.forward(200)

#Clear
turtle.clearscreen()

#Draw Square
turtle.penup()
turtle.forward(200)
turtle.pendown()
turtle.write('Square 100*100')
turtle.left(90)
turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.left(90)
turtle.forward(100)
turtle.left(90)
turtle.forward(100)

#Draw Circle
turtle.penup()
turtle.goto(-100,0)
turtle.pendown()
turtle.write('Circle Radius 80')
turtle.circle(80)