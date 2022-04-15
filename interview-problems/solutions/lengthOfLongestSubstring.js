// OPTIMAL SOLUTION
const lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    const seenChars = {};

    let left = 0,
        longest = 0;

    for (let right = 0; right < s.length; right++) {
        const currentchar = s[right];

        const prevSeenChar = seenChars[currentchar];

        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }

        seenChars[currentchar] = right;

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};
