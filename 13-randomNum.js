//random number from 0-1;
let randomNumber = Math.round(Math.random());


//random number from 0-6;
randomNumber = Math.round(Math.random() * 6)


//random number from 1-10
randomNumber = Math.floor(Math.random() * 10) + 1;
//console.log(randomNumber);

// 10 random number at a time
for (let i = 1; i <= 10; i++) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

const num = 2.1205;
const floorResult = Math.floor(num);
const ceilResult = Math.ceil(num);
const roundResult = Math.round(num);
//console.log(roundResult);
