//WAP to create an arrray of no and filter no which are not perfect square.

const arr=[6,3,2,5,7,23,36];
const value=arr.filter((n)=>{return(Math.sqrt(n)==parseInt (Math.sqrt(n)))});
console.log(value);



//WAP  to create an array of names and filter names with length greater than 5

const arr1=['saurabh','sandeep','aman','anmol','ravi'];
const value1=arr1.filter((p) => {return(p.length >5)});
console.log(value1);



//Wap to create an array of full names and use map to keep only first name 

const arr2=['saurabh singh','sandeep tiwari','aman mishra','anmol singh','ravi yadav'];
const value2=arr2.map((p) => {return(p.split(" ")[0])});
console.log(value2);

