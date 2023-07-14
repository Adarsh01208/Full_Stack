const num = [2, 4, 3, 5, 3];

for (let i = 0; i < num.length; i++) {
  console.log(num[i] ** 2);
}

console.log('---------------');
let nums = [];

for (let n of num) {
  // console.log(n**2);
  console.log(nums);
  nums.push(n ** 2);
}

console.log(nums);

