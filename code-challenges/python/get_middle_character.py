# https://www.codewars.com/kata/56747fd5cb988479af000028/train/python
def get_middle(s):
    print(s)
    #your code here
    mid_index = int(len(s)/2)
    result = s[mid_index]
    if len(s) % 2 == 0: 
        result = s[mid_index-1] + result
    return result