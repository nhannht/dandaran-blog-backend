export {};
const middleWare = (req, res, next) => {
  if (! req.session.User ) {
    return res.status(404).send('Required login');
  }
  next();
};
module.exports = middleWare;
