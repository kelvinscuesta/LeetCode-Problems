class Solution:
    def leftMostColumnWithOne(self, binaryMatrix: 'BinaryMatrix') -> int:

        n, m = binaryMatrix.dimensions()
        x = 0
        y = m - 1
        lastY = -1

        while x < n and y >= 0:
            if binaryMatrix.get(x, y) == 1:
                # move left
                lastY = y
                y -= 1
            else:
                x += 1
                
        return lastY