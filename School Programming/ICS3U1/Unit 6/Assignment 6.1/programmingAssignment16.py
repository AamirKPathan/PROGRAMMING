import math

def area_circle():
    """Calculates the area of a circle using user-provided radius."""
    r = float(raw_input("Enter the radius of the circle: ")) # type: ignore
    area = math.pi * r ** 2
    return area
print ("Area of the circle:"), round(area_circle(), 2)
def sa_cylinder():
    """Calculates the surface area of a cylinder using user-provided height and radius."""
    height = float(raw_input("Enter the height of the cylinder: ")) # type: ignore
    radius = float(raw_input("Enter the radius of the cylinder: ")) # type: ignore
    surface_area = 2 * math.pi * radius * (height + radius)
    return surface_area
print ("Surface area of the cylinder:"), round(sa_cylinder(), 2)
def v_rect_prism():
    """Calculates the volume of a rectangular prism using user-provided dimensions."""
    length = float(raw_input("Enter the length of the rectangular prism: ")) # type: ignore
    width = float(raw_input("Enter the width of the rectangular prism: ")) # type: ignore
    height = float(raw_input("Enter the height of the rectangular prism: ")) # type: ignore
    volume = length * width * height
    return volume
print ("Volume of the rectangular prism:"), round(v_rect_prism(), 2)
def find_time():
    """Calculates the time for an object to hit the ground using user-provided initial velocity and height."""
    v = float(raw_input("Enter the initial velocity of the object: ")) # type: ignore
    h = float(raw_input("Enter the initial height of the object: ")) # type: ignore

    # Solving -4.9t^2 + vt + h = 0 using the quadratic formula
    a = -4.9
    b = v
    c = h

    discriminant = b**2 - 4*a*c
    if discriminant < 0:
        return "No real solution"
    
    t1 = (-b + math.sqrt(discriminant)) / (2 * a)
    t2 = (-b - math.sqrt(discriminant)) / (2 * a)
    
    return max(t1, t2) if max(t1, t2) >= 0 else "No valid time"
print ("Time for object to hit ground:"), find_time()
