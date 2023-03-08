// Setting up my MongoDB Database for adding birds to profile later
const mongoose = require('mongoose');
const { Schema } = mongoose;
// I don't feel confident about this link.. I pulled it from my created database
const MONGO_URI = 'mongodb+srv://victoria:e7wJkwTxgJCHjh86@cluster1.cmxjvoo.mongodb.net/test'

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
	name: String,
	location: String
})

const Birds = mongoose.model('birds', birdSchema)

module.exports = Birds;