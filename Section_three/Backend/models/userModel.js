const { model, Schema } = require('../Connection');

const myschema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number

});


module.exports = model('users', myschema);

