
 //using map function
const art = [1,2,3,4,5,6];
const result1 = art.map((n) => { return n**2}) ; 
//  call back function
console.log(result1);

const prices=[123,234,345,456,678];
// use map to add 5% gst to all prices
const result2 = prices.map((n) => { return (n*0.05 + n)});
console.log(result2);


const prices1=['$233.34','$4556.334','$345.567'];

const result3= prices1.map((n) => {return(parseInt(n.slice(1)))});
console.log(result3);

//using filter function

const prices2=[23334,4556,3457];
const result4 = prices2.filter((p)=> {return p>=400 && p<=1000});
console.log(result4);

const lapto=['dell','hp','lenovo','asus'];
const d1 = 'dell';
const result5= laptop1.filter((title) => {return(title.includes(d))});
console.log(result5);

const laptop1=['Dell','hp','lenovo','asus'];
const d2 = 'dell';
const result6= laptop1.filter((title) => {return(title.toLowerCase().includes(d.toLowerCase()))});
console.log(result6);
