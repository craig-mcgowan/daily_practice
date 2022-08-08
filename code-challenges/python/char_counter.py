def count(string):
    # The function code should be here
    res = {}
    for char in string:
        if char in res:
            res[char] += 1
        else:
            res[char] = 1
    return res