// Serve the MongoDB model:
const Birds = require('./birdModels');

const UserController = {
  getUser (req, res, next) {
    Birds.User.find({})
      .then((data => {
        res.locals.user = data;
        return next();
      }))
      .catch((err => {
        return next({
          log: 'Error at general getUser request',
          status: 404,
          message: { err: 'An error occurred' },
        })
      }))
  },
  createUser(req, res, next) {
    const { name, photo } = req.body;
    Birds.User.create({name: name, photo: photo})
      .then((data => {
        res.locals.created = data;
        return next();
      }))
  },
  updateUser(req, res, next) {
    const name = req.params.name;
    const newName = req.body.newName;
    console.log('entered update middleware', name)
    Birds.User.updateOne({name: name}, {name: newName})
      .then((data => {
        return next()
      }))
      .catch((err => {
        return next({
          log: 'Error updating user',
          status: 404,
          message: { err: 'An error occurred' },
        })
      }))
  }
}

module.exports = UserController;