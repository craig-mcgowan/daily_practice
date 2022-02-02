# https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python

def reverse_seq(n):
    results_arr = []
    while n > 0: results_arr.append(n); n -= 1
    return results_arr

# .append() is equivalent to Javascripts .push()