; images
(require 2htdp/image)

(circle 10 "solid" "red")
(circle 10 "outline" "blue")
(rectangle 10 20 "solid" green)

(text "Hello World" 25 "orange")

(above (circle 10 "solid" "red")
       (circle 20 "solid" "green")
       (circle 30 "solid" "blue"))

(overlay (circle 10 "solid" "red")
         (circle 20 "solid" "white")
         (circle 30 "solid" "blue")
         (circle 40 "solid" "yellow"))