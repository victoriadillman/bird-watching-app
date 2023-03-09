// Setting up my MongoDB Database for adding birds to profile
const mongoose = require('mongoose');
const { Schema } = mongoose;
const MONGO_URI = 'mongodb+srv://victoria:e7wJkwTxgJCHjh86@cluster1.cmxjvoo.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'birds'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


const birdSchema = new Schema ({
	name: {type: String, required: true},
	location: {type: String, required: true}
})

const Birds = mongoose.model('birds', birdSchema)

const userSchema = new Schema ({
  name: {type: String, required: true},
  photo: {type: String, required: true}
})

const User = mongoose.model('user', userSchema)

module.exports = {
  Birds,
  User
};