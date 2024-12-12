const items = [1, 1, 2, 2, 3, 4, 4, 5]

function removeDuplicates(nums) {
    let uniqueIndex = 0;

    nums.forEach((num) => {
        if (num !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = num;
        }
    });
    
    return uniqueIndex + 1;
}

let k = removeDuplicates(items);
console.log("Unique nums value", k);
console.log("Array after remove dublicates:", items.slice(0, k));