;if expressions
(define WIDTH 100)
(define HEIGHT 100)
(> WIDTH HEIGHT)
(> WIDTH HEIGHT)
(= WIDTH HEIGHT)

(define I1(rectangle 10 20 "solid" "red"))
(define I2(rectangle 20 10 "solid" "red"))

(if(< (image-width I1)
      (image-height I1)
      "tall"
      "wide"
      ))