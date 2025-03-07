/**
 * 
 * fórmula
 * fib(1) = 1;
 * fib(2) = 1;
 * firb(n) = fin(n-2) + fib(n-1)
 * serie 1, 1, 2, 3, 5, 8, 13, 21, ... 
 */

function fibonacci(num) {
    if (num === 1 || num === 2) return 1;

    return (fibonacci(num-2)+fibonacci(num-2));
}

console.log(fibonacci(6));