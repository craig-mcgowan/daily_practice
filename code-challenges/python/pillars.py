# https://www.codewars.com/kata/5bb0c58f484fcd170700063d

def pillars(num_pill, dist, width):
    if num_pill==1: return 0
    total_dist = (dist*100+width)*(num_pill-1)-width
    return total_dist