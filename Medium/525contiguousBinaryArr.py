class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
      # want to store in a dictonary the count and where we found it 
      # iterate over the list of 0's and 1's
      # want to keep track of the max at each iteration
      where_count_appeared = {0: -1}
      count = 0
      maxLength = 0
      for index, num in enumerate(nums):
        if num == 0:
          count -= 1
        else: 
          count += 1
          
        if where_count_appeared.get(count) != None:
          maxLength = max(maxLength, index - where_count_appeared[count])
        else:
          where_count_appeared[count] = index
      
      return maxLength