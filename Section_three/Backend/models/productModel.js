const { model, Schema } = require('../Connection');

const myschema = new Schema({

    title: String,
    description: String,
    price: Number,
    category: String,
    image: String

});

module.exports = model('product', myschema);


