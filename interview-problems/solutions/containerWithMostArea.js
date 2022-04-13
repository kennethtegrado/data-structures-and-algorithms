// OPTIMAL SOLUTION
// LOGIC:
/*
    We use two pointers to get our maxArea.
    1. We know that the width of the container affects our max area due to multiplication. Hence, we know that the farther away our elements are, the larger the area is.
    2. We know that the one with the lower value is the one that actually affects our area. 
    3. We shift our left pointer to the right if the element at that location is less than the right element
    4. We shift our right pointer to the left if the element at that location is less than the left element
*/
const maxArea = function (height) {
    let leftPointer = 0,
        rightPointer = height.length - 1,
        maxArea = 0,
        area,
        length;

    while (leftPointer < rightPointer) {
        length = Math.min(height[leftPointer], height[rightPointer]);
        area = length * (rightPointer - leftPointer);
        maxArea = Math.max(area, maxArea);
        // SHIFT LOGIC
        if (height[leftPointer] <= height[rightPointer]) leftPointer++;
        else rightPointer--;
    }

    return maxArea;
};

// BRUTEFORCE SOLUTION
var maxAreaBrute = function (height) {
    let max = 0;
    let area, h;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            h = Math.min(height[i], height[j]);
            area = h * (j - i);

            max = Math.max(max, area);
        }
    }
    return max;
};
