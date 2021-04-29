const { Session } = require('../models');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieID: req.cookies.ssid }, (err, session) => {
    if (err)
      return next(
        `Error in sessionController.isLoggedIn: ${JSON.stringify(err)}`
      );
    //no session found, send back nothing for now...
    if (!session) res.redirect('/s/* ignup */');
    // session found, send back userid that is in cookie
    return next();
  });
};

/**
 * Want to figure out this session issue;
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = async (req, res, next) => {
  console.log('now in Session Creator');
  if (!res.locals.user) return next();
  console.log('res locals from verify user to session controller ', res.locals);
  let session = false;
  //findOne
  await Session.findOne({ cookieID: res.locals.user._id }, (err, dbResponse) => {
    if (err) console.log('there was an error finding cookieID in start session middleware')
    if (dbResponse) session = true; //breaks out of this middleware if the session exists
  })
  //if found set sesson to true
  console.log('the session bool is: ', session);
  if (!session) {
    try {
      // console.log(
      //   'checking res locals user id in start session controller',
      //   res.locals.user._id
      // );
      Session.create(
        { cookieID: res.locals.user._id },
        // { upsert: true },
        (err, session) => {
          console.log(`this is the session response from the db: ${session}`);
          if (err) {
            console.log(err);
            return next(`Error in sessionController.startSession: ${err}`);
          }
          return next();
        }
      );
    } catch (error) {
      if (err) {
        console.log('duplicate key, skipping ', error);
        next();
      }
    }
  } else next();
};

sessionController.endSession = (req, res, next) => {
  console.log('endSession controller cookies ssid', req.cookies.ssid)
  Session.deleteOne({ cookieID: req.cookies.ssid }, (err, data) => {
    if(err){
      console.log('error with deleting cookie: ', err)
      next();
    }
  });
  next();
};

module.exports = sessionController;
