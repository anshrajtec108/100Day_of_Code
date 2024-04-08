var instance = new Example();
class Example {
    constructor() {
        this.value = 42;
    }
}
console.log(instance.value);

/* Answer: This will result in a ReferenceError.

Explanation: Unlike function declarations, class declarations are not hoisted. 
The Example class is not available until after its declaration. 
Calling the constructor before the class is defined results in a ReferenceError. */