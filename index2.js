function fib(n) {
    let firstNumber = 1
    let secondNumber = 1
    for (let i = 3; i <= n; i++) {
        let thirdNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = thirdNumber
    }
    return secondNumber
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))