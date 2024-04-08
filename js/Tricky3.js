const obj = {
    value: 42,
    getValue: function () {
        return this.value;
    }
};

const anotherObj = {
    value: 99
};

console.log(obj.getValue());
console.log(obj.getValue.call(anotherObj));

/* Answer: The output will be 42, 99.
Explanation: The value of this inside a function is determined by how the function is called.
In the first console.log, obj.getValue() is called, so this refers to obj.
In the second call, obj.getValue.call(anotherObj) explicitly sets this to anotherObj. */