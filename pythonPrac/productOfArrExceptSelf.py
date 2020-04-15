def productExceptSelf(self, nums: List[int]) -> List[int]:
      # want to create a new list 
      output = []
      forwardPass = 1
      backwardPass = 1
      
      for num in nums:
        output.append(forwardPass)
        forwardPass *= num
      
      # now have to work backwards through the list 
      i = len(output) - 1
      while i >= 0:
        output[i] *= backwardPass
        backwardPass *= nums[i]
        i -= 1
      
      return output