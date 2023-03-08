const express = require('express');
const app = express();
const path = require('path');
// Trying to serve the MongoDB model:
const models = require('./birdModels');

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

app.post('/', )

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

module.exports = app;