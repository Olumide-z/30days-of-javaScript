function outerFunction() {
    let a = 2;
    let b = 2;
    function innerFunction() {
        const sum = a+b
        return sum
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())

//3 closure
function outerFunction2(){
    let c = 5;
    let d = 6;
    function innerFunction2(){
        const multiplication = c*d
        return multiplication
    }
    function innerFunction3(){
        const division = c/d
        return division
    }
    function innerFunction4(){
        const subtraction = c - d
        return subtraction
    }

    return{
        innerFunction2:innerFunction2(),
        innerFunction3:innerFunction3(),
        innerFunction4:innerFunction4()
    }
}
const innerFuncs = outerFunction2()

console.log(innerFuncs.innerFunction2)
console.log(innerFuncs.innerFunction3)
console.log(innerFuncs.innerFunction4)