for(let i=0;i<10;i++){
    console.log(i)
};

for(let i=10;i>0;i--){
    console.log(i)
};

let prime=true;
let m=35;
for(i=2;i<m;i++)
{
    if(m%i===0){
        console.log('not prime')
        prime=false;
        break;
    }
}

if(prime)console.log('prime');

console.log("-----------------------");

//Wap to check if number is divisible by both 7 and 11 in range of 100-500

for(i=100;i<500;i++)
{
    if(i%7===0 && i%11===0)
    {
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

let n =25;

let sqrt = n**0.5;

// console.log(26**0.5===parseInt(26**0.5));

if(sqrt==parseInt(sqrt)){
    console.log('perfect square');
}
else{
    console.log('not perfect square');
};

let p=10;
while(p>0)
{
    console.log(p);
    p--;
};
let q=5;
do{
    console.log(q)
    q--
}
while(q>0);

let num1 =4536;
let reverse=0;
while (num1>0){
    let d=num1%10;
    reverse=reverse*10+d;
    num1=parseInt(num1/10);
}
console.log(reverse);