def factorial(num)
  if (num === 1) {
    return 1
  } else {
    num * factorial(num - 1)
  }
}

# puts factorial(0)
puts factorial(1)
puts factorial(2)
puts factorial(3)
puts factorial(4)
puts factorial(5)
puts factorial(6)
puts factorial(7)
puts factorial(8)
