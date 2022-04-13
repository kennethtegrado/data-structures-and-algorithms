// BEST SOLUTION
// O(n)
// LOGIC
/*
    
*/
const twoSum = (nums, target) => {
    // RECORD
    const numsMap = {};

    for (let p = 0; p < nums.length; p++) {
        // CHECK IF WE ALREADY HAVE A VALUE FOR ELEMENT NUMS[P]
        if (numsMap[nums[p]] >= 0) {
            // RETURN IF WE ALREADY HAVE ONE
            return [numsMap[nums[p]], p];
        } else {
            // CREATE A RECORD OF NTF
            const numberToFind = target - nums[p];

            // Create a record of NTF and set the value of index to p
            numsMap[numberToFind] = p;
        }
    }

    return null;
};

// ANOTHER OPTIMIZED SOLUTION
// O(2n) -> O(n)
const twoSumOptimized = (nums, target) => {
    const t = {};

    // IF WE HAVE DUPLICATES WHAT WE WILL HAVE IS THE LAST INDEX
    for (let i = 0; i < nums.length; i++) t[nums[i]] = i;

    for (let i = 0; i < nums.length; i++) {
        const d = target - nums[i];
        if (t[d] && t[d] !== i) return [i, t[d]];
    }

    return null;
};

// BRUTE FORCE SOLUTION
// O(n^2)
// FIRST
const twoSumBruteForce = (nums, target) => {
    // CHECKING EVERY ELEMENT
    nums.forEach((element, index) => {
        for (let i = index + 1; i < nums.length; i++) {
            if (element + nums[i] === target) {
                return [index, i];
            }
        }
    });

    return null;
};

// SECOND BRUTE FORCE SOLUTION
const twoSumSecondBruteForce = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return null;
};
