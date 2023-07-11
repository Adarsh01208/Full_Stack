const myarr = [235, 'maruti', 46, 'audi', true, console.log, [23, 34]];

console.log(myarr.length);
console.log(typeof myarr);

const movie = ['avengers', 'flash', 'pushpa', 'omg', 'jawan'];
//indexing
console.log(movie[2]);
console.log(movie[100]);
console.log(movie.at(-2));
console.log(movie.indexOf('pushpa'));

//slicing
console.log(movie.slice(2, 5));
console.log(movie.slice());

//adding a element
movie.push('shershah');
movie.unshift('avtar');

console.log(movie);



//removing elements

movie.pop();
movie.shift();
console.log(movie);

movie.splice(1, 2);

console.log(movie);

//spread operator

const aboutWork = ["help", "students"];
const aboutUs = ["Digipodium", ...aboutWork, "grow."];

console.log(aboutUs);

//write a pgm to excule element on index 4 using slice funtion

const fruit = [...movie, 'apple', 'banana', 'lichi', 'papaya'];
console.log(fruit);





