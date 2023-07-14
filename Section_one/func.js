function add(c,b){
    var a = c + b;
    console.log(a);
}
add(23,34);
// console.log(a);

const persentage= function(m1, m2, m3, m4, m5){
    m = (m1+ m2+ m3+ m4+ m5)/(5);
    console.log('persectage' + m);
}
persentage(34,45,56,67,78);

// new in es6

const getfact = (num) => {
    let f = 1;
    for(let i = 1; i<=num; i++)
            {
                f*=i;
            };
            console.log(f);
            return f;
}
getfact(5);

const result = getfact(8);
console.log(result);
