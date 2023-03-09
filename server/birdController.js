// Serve the MongoDB model:
const Birds = require('./birdModels');

const BirdController = {
  // Giving birds
  giveBird (req, res, next) {
    Birds.Birds.find({})
      .then((data => {
        res.locals.birds = data;
        return next()
      }))
      .catch((err => {
        return next({
          log: 'Error at general getBird request',
          status: 404,
           message: { err: 'An error occurred' },
        })
      }))
  },

  // Bird creation into database
  createBird (req, res, next) {
    const { name, location } = req.body;
    Birds.Birds.create({name: name, location: location})
      .then((data => {
        res.locals.created = data;
        return next();
      }))
      .catch((err => {
        return next({
          log: 'Error in createBird, adding to DB',
          status: 422,
          message: { err: 'Error, make sure options are filled out correctly' }
        })
      }))
  },
  // Delete birds
  deleteBird (req, res, next) {
    // Get query param
    const name = req.params.name;
    Birds.Birds.deleteOne({name: name})
      .then((data) => {
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Error at deleteBird' + err,
          status: 404,
          message: { err: 'An error occurred' },
        })
      })
  }
}

module.exports = BirdController;