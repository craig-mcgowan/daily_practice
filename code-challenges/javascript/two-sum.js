/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//const arr1 = [2,7,11,15]
//const target = 9
const twoSum = function (nums, target) {
  console.log(nums, target);
  const comp = {};

  for (let i = 0; i < nums.length; i++) {
    if (comp.hasOwn(nums[i])) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

/*
Running through the above...
loop 1
    comp = {}
    i=0
    nums[1]=2
    comp does not have a property of 2 so the if statement does not run
    comp[9-2]=0
    comp{7:0}
loop 2
    comp{7:0}
    i=1
    nums[1]=7
    comp does have a property of 7 !
    returns [comp[7], 1]
    returns [0,1]
*/
