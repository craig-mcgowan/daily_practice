#https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python
def accum(s):
    # your code
    new = ""
    for i, char in enumerate(s):
        print(i, char)
        new += char.upper() + char.lower()*i +"-"
#         for ele in range()
    return new.rstrip("-") 