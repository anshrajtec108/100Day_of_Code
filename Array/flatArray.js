function flatArray(arr) {
    let res = [];

    arr.forEach((a,i) => {
        console.log(i,a)
        if (Array.isArray(a)) {
            res = res.concat(flatArray(a));
        } else {
            res.push(a);
        }
    });

    return res;
}

let data = [1, [3, 2], [2], [[[2]]]];
console.log(flatArray(data));