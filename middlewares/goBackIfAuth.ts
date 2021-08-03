export {};
const middleWare = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/');
  }
  next();
};
module.exports = middleWare;
