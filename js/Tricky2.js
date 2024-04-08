async function asyncFunc() {
    console.log('A');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('B');
}
console.log('C');
asyncFunc();
console.log('D');
//output = C A D B


async function asyncFunc() {
    console.log('A');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('B');
}
console.log('C');
asyncFunc().then((res) => console.log('D'))
//output = C A B D