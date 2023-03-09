const express = require('express');
const app = express();
const path = require('path');
// // Serve the MongoDB model: (adding this to birdController)
// const Models = require('./birdModels');

// Serve birdController & router functionality
const BirdController = require('./birdController');
const UserController = require('./userController')

console.log("Running 3000 server...");
// json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve the bundle from webpack
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/bird/', BirdController.giveBird, (req, res) => {
  // going to send res.locals instead 
  return res.status(200).send(res.locals.birds)
})

app.post('/', BirdController.createBird, (req, res) => {
  return res.status(200).send(res.locals.created);
})

app.delete('/:name', BirdController.deleteBird, (req, res) => {
  return res.sendStatus(200);
})

app.get('/user', UserController.getUser, (req, res) => {
  return res.status(200).send(res.locals.user)
})
app.post('/user', UserController.createUser, (req, res) => {
  return res.sendStatus(200)
})
app.patch('/user/:name', UserController.updateUser, (req, res) => {
  return res.sendStatus(200);
})

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

module.exports = app;