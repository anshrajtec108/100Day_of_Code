console.log('Start');

Promise.resolve().then(() => console.log('Promise 1'));
setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve().then(() => console.log('Promise 2'));
setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');