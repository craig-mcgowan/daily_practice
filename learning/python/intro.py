my_name = "Craig McGowan"
print("Hello and welcome " + my_name + "!")

# Comments are preceded by the pound symbol

# Printing is equivalent to the console logging in javascript
print("Hello World!")

print('Craig')

# We've defined the variable "meal" here to the name of the food we ate for breakfast!
meal = "An english muffin"

# Printing out breakfast
print("Breakfast:")
print(meal)

# Now update meal to be lunch!
meal = 'lunch'

# Printing out lunch
print("Lunch:")
print(meal)

# Now update "meal" to be dinner

# Printing out dinner
print("Dinner:")
print(meal)

print("This message has mismatched quote marks!")
print("Abracadabra")

#Loops
board_games = ["Settlers of Catan", "Carcassone", "Power Grid", "Agricola", "Scrabble"]

sport_games = ["football", "hockey", "baseball", "cricket"]

# Remember that a block of code is differentiated by indenting!
for game in board_games:
  print(game)

for game in sport_games:
  print(game)

promise = "I will finish the python loops module!"

for i in range(5):
  print(promise)

countdown = 10
while countdown >= 0: print(countdown); countdown -= 1
print("We have liftoff!")