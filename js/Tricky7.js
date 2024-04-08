const obj = { prop: 'old' };
const arr = [obj];

obj.prop = 'new';
console.log(arr[0].prop);

// new 