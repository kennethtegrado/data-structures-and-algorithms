// BRUTEFORCE SOLUTION
var maxArea = function (height) {
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
