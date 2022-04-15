// OPTIMAL SOLUTION
const lengthOfLongestSubstring = function (s) {
    // GUARD CLAUSE
    if (s.length <= 1) return s.length;

    // RECORD FOR VISITED CHARACTERS
    const seenChars = {};

    let left = 0,
        longest = 0;

    for (let right = 0; right < s.length; right++) {
        // CURRENT CHARACTER
        const currentchar = s[right];

        // CHECK IF WE HAVE ALREADY SEEN THE CHARACTER
        const prevSeenChar = seenChars[currentchar];

        // IF WE HAVE ALREADY SEEN THE CHARACTER THEN WE MOVE THE POSITION OF THE LEFT POINTER AS LONG AS THE INDEX OF THE PREVIOUSLY SEEN CHARACTER IS LESS THAN LEFT
        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }

        // UPDATE THE VALUE OF OUR SEENCHARS TO RIGHT
        seenChars[currentchar] = right;

        // UPDATE LONGEST
        longest = Math.max(longest, right - left + 1);
    }

    // RETURN LONGEST
    return longest;
};
