
//creating an objects  in js
const user = {
    name: "raju",
    email: "raju@gmail.com",
    password: "3gkd678wery7i"
};

// fetching values
console.log(user.email);
console.log(typeof user);
console.log(user['password']);

// adding values
user.address = "lucknow";
console.log(user);

// overwrite values
user.password = "uuuyt";
console.log(user);

//you cant print an obect via loops
for (let k of Object.values(user)) {
    console.log(k);
}
const laptop = [
    { brand: 'hp', model: 'pavilion', price: 45678, color: ['black', 'silver', 'white'] },
    { brand: 'lenovo', model: 'thinkpad', price: 57890, color: ['white'] },
    { brand: 'hp1', model: 'elitebook', price: 79890, color: ['blue'] },
    { brand: 'asus', model: 'ultrabook', price: 46770, color: ['black', 'silver', 'blue'] },
]

// syntax to get price of ultrabook
console.log(laptop[3].price);

// syntax to replace silver color to gray color of ultra book
console.log(laptop[3].color[1] = "gray")

// syntax to print brand name
for (let i = 0; i < laptop.length; i++) {
    console.log(laptop[i].brand)
}

//syntax to filter laptops having price less than 50000
const result = laptop.filter((i) => { return (i.price < 50000) });
console.log(result);

//syntax to filter laptops having black color
const result1 = laptop.filter((i) => { return (i.color.includes('black')) });
console.log(result1);

//syntax to filter brand name of laptops having black color
for (let i = 0; i < laptop.length; i++) {
    if (laptop[i].color.includes('black'))
        console.log(laptop[i].brand)
}
console.log('---------------------');
//WAP to calculate the price of all laptop

let sum = 0;
for (lap of laptop) {
    sum = sum + lap.price;
}
console.log(sum)

console.log('---------------------');

//Wap to filter the laptop price range between 40000 and 50000

const prices = laptop.filter((n) => { return (n.price > 40000 && n.price < 60000) });
console.log(prices);

console.log('---------------------');

//WAP to add 10% discount to all laptop

const disc = laptop.map((n) => { return n.price * 0.9 });
console.log(disc);
