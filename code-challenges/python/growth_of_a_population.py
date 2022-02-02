# https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/python


def nb_year(p0, percent, aug, p):
    # your code
    # import math
    # return range(p0, p, math.floor((p0*(percent/100)+aug))).len()
    years = 0
    while p0 < p:
      p0 = p0*1+percent/100+aug
      years+=1
    return years
