def narcissistic( value ):
    # Code away
    num_lst = [int(char)**len(str(value)) for char in str(value)]
    return sum(num_lst)==value