//for loop
for (let i = 0; i < 10; i++) {
    console.log(i)
};

for (let i = 10; i > 0; i--) {
    console.log(i)
};

//prime number pgm for given no

let prime = true;
let m = 35;
for (i = 2; i < m; i++) {
    if (m % i === 0) {
        console.log('not prime')
        prime = false;
        break;
    }
}

if (prime) console.log('prime');

console.log("-----------------------");

//Wap to check if number is divisible by both 7 and 11 in range of 100-500

for (i = 100; i < 500; i++) {
    if (i % 7 === 0 && i % 11 === 0) {
        console.log(i);
    }
}

//wap a pgm check wheather the given no is perfect square
// let a=34;
// for(i=1;i<a;i++)
// {
//     if(i*i===a)
//     {
//         console.log('perfect square');
//         break;
//     }

// }

let n = 25;

let sqrt = n ** 0.5;

// console.log(26**0.5===parseInt(26**0.5));

if (sqrt == parseInt(sqrt)) {
    console.log('perfect square');
}
else {
    console.log('not perfect square');
};

//while loop
let p = 10;
while (p > 0) {
    console.log(p);
    p--;
};

//do while loop
let q = 5;
do {
    console.log(q)
    q--
}
while (q > 0);

//reverse of given number
let num1 = 4536;
let reverse = 0;
while (num1 > 0) {
    let d = num1 % 10;
    reverse = reverse * 10 + d;
    num1 = parseInt(num1 / 10);
}
console.log(reverse);

//assinment
//sum of no form 1 to 10
let sum = 0;
for (let i = 1; i < 10; i++) {
    sum = sum + i;

}
console.log(sum);

//wap for fibonacci series
let no1 = 0, no2 = 1;
console.log(no1);
console.log(no2);
for (let i = 0; i < 10; i++) {
    var c = no1 + no2;
    console.log(c);
    no1 = no2;
    no2 = c;
}

//wap for palindrome no
let no = 2002;
let rev = 0;
let temp = no;
while (no > 0) {
    let rem = no % 10;
    rev = rev * 10 + rem;
    no = parseInt(no / 10);
}
console.log(rev);

if (temp === rev) {
    console.log("palindrome no")
}
else {
    console.log("not Palindrome ")
}

//temperature pgm celcius to farhenheit

const temp1 = 30;
far_temp = (temp1 * 9 / 5) + 32;
console.log('Temperature for ' + temp1 + ' degree c in Fahrenheit is ' + far_temp + ' degree F');
console.log('Temperature for ${temp} degree  in Fahrenheit is ${far_temp} degree F');
