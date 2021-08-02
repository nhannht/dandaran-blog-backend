export {};
const model = require('../models/Post');
const path = require('path');

const controller = async (req, res) => {
  const image = req.files.image;
  image.mv(path.resolve(__dirname, '../public/img', image.name),
      async (error) => {
        if (error) {
          res.send(error);
        } else {
          await model.create({

            ...req.body,
            image: 'public/img/'+ image.name,

          }, (err, result) => {
            if (err) {
              res.send(err);
            }
          });
        }
      });
  res.send(req.body);
};


module.exports = controller;
