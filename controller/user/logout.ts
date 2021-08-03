export {};
const controller = (req, res, error) => {
  if (error) {
    res.send(error);
    res.end();
  } else {
    req.session.destroy();
    res.send('Sucessful log out');
  }
};
module.exports = controller;
