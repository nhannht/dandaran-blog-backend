export {};
const model = require('../../models/Post');
const path = require('path');
import {UploadedFile} from 'express-fileupload';
import {CustomResponse} from '../../interface/customResponse';
import {CustomRequest} from '../../interface/customRequest';

const controller = async (req:CustomRequest, res:CustomResponse) => {
  const image = req.files.image as UploadedFile;
  image.mv(path.resolve(__dirname, '../public/img', image.name),
      async (error:Error) => {
        if (error) {
          return res.status(404).send(error.message);
        } else {
          await model.create({

            ...req.body,
            image: 'public/img/'+ image.name,
            user: req.session.User,

          }, (err:Error) => {
            if (err) {
              return res.status(404).send(err.message);
            }
          });
        }
      });
};


module.exports = controller;
