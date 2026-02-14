;Sample Equation
(+  2 (* 3 4) (- (+ 1 2) 3))

; the opening sign of a bracket pair is the primitive call
; it is the operator
; the expressions that follow are operands

; STEP BY STEP Of How RKT Calculates
; 1. All Operands Are Reduced To Value
; 2. Apply Primitive Calls To The Values

(+ 2 (* 3 4) (- (+ 1 2) 3))
(+ 2 12      -1)