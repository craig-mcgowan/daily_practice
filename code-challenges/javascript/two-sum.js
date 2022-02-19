// https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let arr = []
    nums.forEach((num, index)=> {
        if (target/2 !== num) { 
            const ans = target - num
            console.log(ans)
            const ansIndex = nums.findIndex(x => x===ans)
            if (ansIndex !== -1) 
        }
    })
    return arr
};