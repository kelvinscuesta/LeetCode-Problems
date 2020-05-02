import unittest

#original 2 solutions
def reverse(list_of_chars):

    # Reverse the input list of chars in place
    
    # lets say we're given
    # ['p', 'a', 'r', 'n', 'd', 'a']
    
    # python offers an easy way of solving this with the reverse built in function
    # return list_of_chars.reverse()
    
    left = 0
    right = len(list_of_chars) - 1
    
    if len(list_of_chars) <= 1: return list_of_chars
    
    while left != right:
        temp = list_of_chars[left]
        list_of_chars[left] = list_of_chars[right]
        list_of_chars[right] = temp
        left += 1
        right -= 1
    
    return list_of_chars
    
    

# pythonic unpacking solution
def reverse2(list_of_chars):
    left = 0
    right = len(list_of_chars)

    while left < right:
        list_of_chars[left], list_of_chars[right] =  list_of_chars[right], list_of_chars[left]

    return









# Tests

class Test(unittest.TestCase):

    def test_empty_string(self):
        list_of_chars = []
        reverse(list_of_chars)
        expected = []
        self.assertEqual(list_of_chars, expected)

    def test_single_character_string(self):
        list_of_chars = ['A']
        reverse(list_of_chars)
        expected = ['A']
        self.assertEqual(list_of_chars, expected)

    def test_longer_string(self):
        list_of_chars = ['A', 'B', 'C', 'D', 'E']
        reverse(list_of_chars)
        expected = ['E', 'D', 'C', 'B', 'A']
        self.assertEqual(list_of_chars, expected)


unittest.main(verbosity=2)