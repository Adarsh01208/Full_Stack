let no =2002;
let rev=0;
let temp= no;
while (temp>0){
    let rem=no%10;
    rev=rev*10+rem;
    no=parseInt(no/10);
}
console.log(rev)