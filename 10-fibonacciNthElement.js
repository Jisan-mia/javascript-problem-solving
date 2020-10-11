//fibonacci series using foor loop
//fibonacci series=  0 1 1 2 3 5 8 13 21 34 55 89....


//fibo[2] = fibo[2 - 1] + fibo[2 - 2];
//fibo[3] = fibo[3 - 1] + fibo[3 - 2];
//fibo[4] = fibo[4 - 1] + fibo[4 - 2];
//fibo[5] = fibo[5 - 1] + fibo[5 - 2];
//fibo[n] = fibo[n - 1] + fibo[n - 2];
//fibo[i] = fibo[i - 1] + fibo[i - 2];


//get nth number fibonacci series  using recursive function
//fibo[n] = fibo[n-1] + fibo[n-2]

function fib(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);

}

let result = fib(10);
console.log(result);
