const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
