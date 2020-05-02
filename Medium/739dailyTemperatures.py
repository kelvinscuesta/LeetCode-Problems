def dailyTemperatures(self, T: List[int]) -> List[int]:

    # Initialize the stack we're working with 
    stack = []
    # fill the list with 0s
    answer_list = [0] * len(T)

    for i,v in enumerate(T):
        while stack and stack[-1][1] < v:
            index, value = stack.pop()
            ans[index] = i - index
        stack.append([i,v])

    return ans 