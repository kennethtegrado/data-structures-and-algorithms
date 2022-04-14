// OPTIMIZED SOLUTION
const trap = function (heights) {
    let totalWater = 0,
        leftPointer = 0,
        rightPointer = heights.length - 1,
        maxLeft = 0,
        maxRight = 0;

    while (leftPointer <= rightPointer) {
        if (heights[leftPointer] <= heights[rightPointer]) {
            maxLeft = Math.max(maxLeft, heights[leftPointer]);
            totalWater += maxLeft - heights[leftPointer];
            leftPointer++;
        } else {
            maxRight = Math.max(maxRight, heights[rightPointer]);

            totalWater += maxRight - heights[rightPointer];
            rightPointer--;
        }
    }

    return totalWater;
};

// BRUTEFORCE SOLUTION
const getTrappedRainwaterBrute = function (heights) {
    let totalWater = 0;
    for (let p = 0; p < heights.length; p++) {
        let leftP = p,
            rightP = p,
            maxLeft = 0,
            maxRight = 0;

        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            console.log(maxLeft);
            leftP--;
        }

        while (rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }

        const currentWater = Math.min(maxLeft, maxRight) - heights[p];
        // console.log(currentWater)

        if (currentWater >= 0) totalWater += currentWater;
    }

    return totalWater;
};
