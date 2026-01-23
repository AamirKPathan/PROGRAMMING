function calculateExpression(expr) {
  try {
    if (expr.includes("/0")) {
      return { error: "Cannot divide by 0" };
    }

    const result = Function(`return ${expr}`)();

    if (!isFinite(result)) {
      return { error: "Invalid expression" };
    }

    if (Math.abs(result) > 999999999) {
      return { error: "Number too large" };
    }

    return { result };
  } catch {
    return { error: "Syntax error" };
  }
}
