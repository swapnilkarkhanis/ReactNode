// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var zpitSchema = new Schema({
  state: String,
  city: String,
  zipcode: {type: Number, require: true},
  retired: String,
  disabled: String,
  widow: String,
  spouse: String,
  children: String
});

// the schema is useless so far
// we need to create a model using it
var zpit = mongoose.model('zpitdata1', zpitSchema);

// make this available to our users in our Node applications
module.exports = zpit;