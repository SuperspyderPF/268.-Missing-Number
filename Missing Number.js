
var missingNumber = function(nums) {
    const mySum = (nums.length * (nums.length + 1)) / 2
    const uSum = nums.reduce((acc, el) => acc + el, 0)
    return mySum - uSum


    
};