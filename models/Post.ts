export {};
const mongoose = require('mongoose');
const env = require('../controller/MongoEnv');
mongoose.connect(`mongodb://${env.username}:${env.password}@localhost:27017/blogpost?authSource=admin`, {useNewUrlParser: true});
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  body: String,
  user: String,
  image: String,
  date: {
    type: Date,
    default: new Date(),
  },
  updateDate: {
    type: Date,
  },
});

const model = mongoose.model('BlogPost', schema);
module.exports = model;
