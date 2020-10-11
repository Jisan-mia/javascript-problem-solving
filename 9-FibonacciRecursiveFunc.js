//fibonacci series using foor loop
//fibonacci series=  0 1 1 2 3 5 8 13 21 34 55 89....


//fibo[2] = fibo[2 - 1] + fibo[2 - 2];
//fibo[3] = fibo[3 - 1] + fibo[3 - 2];
//fibo[4] = fibo[4 - 1] + fibo[4 - 2];
//fibo[5] = fibo[5 - 1] + fibo[5 - 2];
//fibo[n] = fibo[n - 1] + fibo[n - 2];
//fibo[i] = fibo[i - 1] + fibo[i - 2];


//create a fibiancci series in a recursive way
//fibo[n] = fibo[n-1] + fibo[n-2]
//[0, 1, 1, 2, 3, 5, 8, 13, 21..]
function fibonacci3(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    } else {
        //calcualte array nth element
        let fibo = fibonacci3(n - 1);

        let nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;

    }

}

var result1 = fibonacci3(10);
console.log(result1);
