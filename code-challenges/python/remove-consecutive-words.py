#https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/python
def remove_consecutive_duplicates(s):
    print(s)
    # split string by spaces
    arr = s.split()
    # sort list
    print(arr)
    
    def checkUnique(word, prevWord):
        return word != prevWord
#     Compare each word with the preceding word, starting from index(1)
#     If its the different, filter it to the new list
    res = []
    for i, word in enumerate(arr):
        print(i, word)
        if word != arr[i-1] or i==0: 
            res.append(word)
    print(" ".join(res))
    return " ".join(res)