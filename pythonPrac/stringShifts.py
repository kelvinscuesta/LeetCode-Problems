from typing import List
def stringShift(s: str, shift: List[List[int]]) -> str:
    # if a left shift we take the first char and append to end
    # if a right right take last char and append to end
    char = ''
    for move in shift:
        # left shift if 0 in the first index of list
        if move[0] == 0:
            char = s[0:move[1]]
            s = s[move[1]:]
            s += char
        if move[0] == 1:
            char = s[-move[1]:]
            s = s[:-move[1]]
            s = char + s
        char = ''
    return s

def stringShiftOptimized(s: str, shift: List[List[int]]):
    # this list comprehension sum gets the count and adjusted with
    # the modulo
    i = sum([x[1] if x[0] == 0 else -x[1] for x in shift]) % len(s)
    if i != 0:
        return s[i:] + s[:i]
    else:
        return s

print(stringShiftOptimized('abc', [[0,1], [1,2]]))