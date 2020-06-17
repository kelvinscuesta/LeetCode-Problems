class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        
        # if I tackle the border first and find all the ones connect to the border
        # I can mark those off and then run the inner core function to get the actual flips
        # at the end of that convert all the 'B' marks back to 'Os'
        
        # check border to see if we have a 'O' and run the check function that'll mark 
        
        # to check the border we have to traverse the first and last rows 
        
        # marking function
        
        def mark(n, m):
            # want to end the recursive function when we reach a point where the top
            # the left, right and bottom are all either "X" or "B"
            
            # given an n and m
            # only calling at a border unit
            
            # first mark the  current board position
            
            if board[n][m] == "X":
                return
            
            if board[n][m] == "B":
                return
            board[n][m] = "B"
            
            # now traverse the top if possible
            if n > 0:
                mark(n - 1, m)
            
            # traverse bottom if possible
            if n < len(board) - 1:
                mark(n + 1, m)
                
            if m > 0:
                mark(n, m - 1)
            
            if m < len(board[0]) - 1:
                mark(n, m + 1)
            
            return
        
        
        for n in range(len(board)):
            
            # check first border column
            if board[n][0] == "O":
                # run marking function
                # print("marked n:", n)
                mark(n,0)
                
            
            # check last border column
            if board[n][len(board[0]) - 1] == "O":
                # run marking function
                # print("marked last column:", n, len(board[0]) - 1)
                mark(n, len(board[0]) - 1)
            
            # and the first and last rows
            if n == 0 or n == len(board) - 1:
                for m in range(len(board[0])):
                    # print("m:",m)
                    if board[n][m] == "O":
                        # run marking function
                        # print("marked n and m:",n, m)
                        mark(n, m)
        
        
        # clear all the border marks and convert everything to correct answer
        for n in range(len(board)):
            for m in range(len(board[0])):
                if board[n][m] == "O":
                    board[n][m] = "X"
                if board[n][m] == "B":
                    board[n][m] = "O"