# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

import math
class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        # can run a sort of binary search 
        # want to find where a true turns into a false 
        lower = 1
        upper = n
        
        if lower == upper: return lower
        
        mid = math.ceil(lower + upper / 2)
        
        while (lower != upper):
            # if the mid is equal to true forget the right half 
            
            if isBadVersion(mid):
                upper = mid
                if isBadVersion(mid - 1) == False: 
                    return mid
                mid = math.floor((lower + upper) / 2)
            else:
                lower = mid
                if isBadVersion(mid + 1):
                    return mid + 1
                mid = math.ceil((lower + upper) / 2)
            
        
        
        
        
        
        
        
        