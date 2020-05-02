import unittest



# my original solution 
def merge_ranges(meetings):

    # Merge meeting ranges
    new_meetings = sorted(meetings, key=lambda meeting: meeting[0])
    
    # so we create a new list of tuples and see if we can merge the into that value if not 
    output_meetings = [new_meetings[0]]
    
    for x in range(1, len(new_meetings)):
        # if the first value of the tuple is within range 
        if new_meetings[x][0] >= output_meetings[-1][0] and new_meetings[x][0] <= output_meetings[-1][1]:
            new_tuple = (output_meetings[-1][0], max(output_meetings[-1][1], new_meetings[x][1]))
            output_meetings.pop()
            output_meetings.append(new_tuple)
        else:
            output_meetings.append(new_meetings[x])
        

    return output_meetings



# more pythonic way of doing things 

import unittest



def merge_ranges(meetings):

    # Merge meeting ranges
    new_meetings = sorted(meetings, key=lambda meeting: meeting[0])
    
    # so we create a new list of tuples and see if we can merge the into that value if not 
    output_meetings = [new_meetings[0]]
    
    for current_meeting_start, current_meeting_end in new_meetings[1:]:
        # unpack the last merged tuple
        
        last_meeting_start, last_meeting_end = output_meetings[-1]
        
        
        
        # if the first value of the tuple is within range 
        if current_meeting_start <= last_meeting_end:
            new_tuple = (last_meeting_start, max(current_meeting_end, last_meeting_end))
            output_meetings.pop()
            output_meetings.append(new_tuple)
        else:
            output_meetings.append((current_meeting_start, current_meeting_end))
        

    return output_meetings





# Tests

class Test(unittest.TestCase):

    def test_meetings_overlap(self):
        actual = merge_ranges([(1, 3), (2, 4)])
        expected = [(1, 4)]
        self.assertEqual(actual, expected)

    def test_meetings_touch(self):
        actual = merge_ranges([(5, 6), (6, 8)])
        expected = [(5, 8)]
        self.assertEqual(actual, expected)

    def test_meeting_contains_other_meeting(self):
        actual = merge_ranges([(1, 8), (2, 5)])
        expected = [(1, 8)]
        self.assertEqual(actual, expected)

    def test_meetings_stay_separate(self):
        actual = merge_ranges([(1, 3), (4, 8)])
        expected = [(1, 3), (4, 8)]
        self.assertEqual(actual, expected)

    def test_multiple_merged_meetings(self):
        actual = merge_ranges([(1, 4), (2, 5), (5, 8)])
        expected = [(1, 8)]
        self.assertEqual(actual, expected)

    def test_meetings_not_sorted(self):
        actual = merge_ranges([(5, 8), (1, 4), (6, 8)])
        expected = [(1, 4), (5, 8)]
        self.assertEqual(actual, expected)

    def test_one_long_meeting_contains_smaller_meetings(self):
        actual = merge_ranges([(1, 10), (2, 5), (6, 8), (9, 10), (10, 12)])
        expected = [(1, 12)]
        self.assertEqual(actual, expected)

    def test_sample_input(self):
        actual = merge_ranges([(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)])
        expected = [(0, 1), (3, 8), (9, 12)]
        self.assertEqual(actual, expected)


unittest.main(verbosity=2)