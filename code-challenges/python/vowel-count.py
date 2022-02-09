# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python
def get_count(sentence):
    print(sentence)
    vowels = ["a", "e", "i", "o", "u"]
    count = 0
    for vowel in vowels:
        count += sentence.count(vowel)
    return count