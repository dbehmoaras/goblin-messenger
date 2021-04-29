const { User } = require('../models');
const bcrypt = require('bcrypt');

const userController = {};

userController.getAllUsers = (req, res, next) => {
  try {
    User.find({}, (err, users) => {
      console.log(users);
      res.locals.users = users;
      return next();
    });
  } catch (err) {
    return next(`Error in userController.getAllUsers: ${JSON.stringify(err)}`);
  }
};

userController.createUser = async (req, res, next) => {
  console.log(req.body);
  const { username, password, language } = req.body;
  if (username === '') {
    res.locals.noUsername = true;
    res.json(res.locals);
  }
  if (password === '') {
    res.locals.noPassword = true;
    res.json(res.locals);
  }
  if (language === '') {
    res.locals.noLanguage = true;
    res.json(res.locals);
  }

  try {
    console.log(`we're in the userController try statement`);
    const newUser = await User.create({ username, password, language });
    res.locals.user = newUser;
    return next();
  } catch (err) {
    User.findOne({ username }, (err, response) => {
      if (username === response) {
        return res.next(err, {
          log: `userController.createUser: ERROR: User might already exist`,
          message: {
            err: 'userController.createUser: ERROR: User might already exist.',
          },
        });
      }
    });
  }
};

userController.verifyUser = (req, res, next) => {
  console.log(
    `this is the verifyUser request username: ${req.body.username} password: ${req.body.password}`
  );
  //send a req to the db and save the username & pw in res.local
  const { username, password } = req.body;

  // const username = req.body.username;
  // const password = req.body.password;

  // try {
  User.findOne({ username }, (err, response) => {
    console.log('password in verifyUser:', password);
    console.log(`This is the verify user response from the db: ${response}`);
    if (response === null) {
      res.locals.userUnknown = true;
      res.locals.noMatch = false;
      // res.send(res.locals.userUnknown);
      return next();
      //user doesn't exist
    } else if (password) {
      // } else if (bcrypt.compare(password, response.password)) {
      bcrypt.compare(password, response.password, function (err, result) {
        if (result) {
          res.locals.user = response;
          res.locals.noMatch = false;
          res.locals.userUnknown = false;
          return next();
        } else {
          res.locals.noMatch = true;
          res.locals.userUnknown = false;
          return next();
        }
      });
      //this is where the user is found
      console.log(`User logged in as username: ${username}`);
    }
  });
};

module.exports = userController;
