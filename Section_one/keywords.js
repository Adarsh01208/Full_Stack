age = 21;
if (age >= 18) {
    console.log('eligible');
    var y = 'funtion speed'
}
else {
    console.log('not eligible');
}

console.log(y);

// palindrome pgm
let no = 2002;
let rev = 0;
let temp = no;
while (no > 0) {
    let rem = no % 10;
    rev = rev * 10 + rem;
    no = parseInt(no / 10);
}
console.log(rev);

if (no === rev) {
    console.log("palindrome no")
}
else {
    console.log("not Palindrome ")
}