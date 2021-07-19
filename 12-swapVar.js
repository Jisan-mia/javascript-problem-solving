//swap variable: exchange two variable value
//swap variable in a simple way
let a = 5;
let b = 7;
console.log("a= ", b, "b= ", a);

//swap variable using temp var
let x = 10;
let y = 15;
let temp;
temp = x;
x = y;
y = temp;
console.log("x= ", x, "y= ", y);

//swap variable without temporary var
let m = 4;
let n = 2;
m = m + n;
n = m - n;
m = m - n;
console.log("m = ", m, "n = ", n);

//swap variable using destructing assignment
let p = 20;
let q = 35;
[p, q] = [q, p];
console.log("p = ", p, "q = ", q);
