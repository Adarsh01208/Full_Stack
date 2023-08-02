const { model, Schema } = require('../Connection');

const myschema = new Schema({

    title: String,
    firstName: String,
    lastName: String,
    country: String,
    Description: String
});

module.exports = model('contact', myschema);
