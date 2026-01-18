def is_triangle(a, b, c):
    return a + b > c and a + c > b and b + c > a

def is_equilateral(a, b, c):
    return a == b == c

def is_isosceles(a, b, c):
    return a == b or a == c or b == c

def is_scalene(a, b, c):
    return a != b and a != c and b != c

def is_right(a, b, c):
    sides = sorted([a, b, c])
    return sides[0]**2 + sides[1]**2 == sides[2]**2

def is_obtuse(a, b, c):
    sides = sorted([a, b, c])
    return sides[0]**2 + sides[1]**2 < sides[2]**2

def is_acute(a, b, c):
    sides = sorted([a, b, c])
    return sides[0]**2 + sides[1]**2 > sides[2]**2

while True:
        a = int(input("Enter side a (or 0, 0, 0 to exit): "))
        b = int(input("Enter side b (or 0, 0, 0 to exit): "))
        c = int(input("Enter side c (or 0, 0, 0 to exit): "))
        if a == b == c == 0:
          break
        if is_triangle(a, b, c):
            print("These sides form a valid triangle.")
            if is_equilateral(a, b, c):
                print("It is an equilateral triangle.")
            elif is_isosceles(a, b, c):
                print("It is an isosceles triangle.")
            elif is_scalene(a, b, c):
                print("It is a scalene triangle.")

            if is_right(a, b, c):
                print("It is a right triangle.")
            elif is_obtuse(a, b, c):
                print("It is an obtuse triangle.")
            elif is_acute(a, b, c):
                print("It is an acute triangle.")
        else:
            print("These sides do not form a triangle.")
            print("Invalid input! Please enter integers only.")
        print("\n")
print("Program exited.")
   