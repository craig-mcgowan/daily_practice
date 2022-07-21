# Your code below:
single_digits = [0,1,2,3,4,5,6,7,8,9]
squares = []
for digit in single_digits:
  squares.append(digit**2)
  print(digit)
print(squares)

cubes = [digit **3 for digit in single_digits]

print(cubes)