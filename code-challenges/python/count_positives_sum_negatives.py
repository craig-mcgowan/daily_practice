#https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python

def count_positives_sum_negatives(arr):
    if not arr: return arr
    pos = 0
    neg = 0
    for num in arr:
        if num > 0: pos+=1
        else: neg += num 

    
    return [pos, neg]