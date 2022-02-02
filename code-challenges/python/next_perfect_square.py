# https://www.codewars.com/kata/56269eb78ad2e4ced1000013/python

import math
def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    if not math.sqrt(sq).is_integer():
        return -1
    sq+=1
    while not math.sqrt(sq).is_integer():
        sq+=1
    return sq
    
