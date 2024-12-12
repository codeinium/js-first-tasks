function sumOfElems(nums, target){
  let result = []
  nums.forEach((num, i) => {
    const j = nums.findIndex((n, index) => index > i && num + n === target);
    if (j !== -1) {
      result = [i, j];
    }
  });
  return result;
};


sumOfElems([2, 7, 11, 15 ], 13)
sumOfElems([2, 7, 11, 15 ], 17)