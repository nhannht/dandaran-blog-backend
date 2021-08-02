export {};
const mongoose = require('mongoose');
const env = require('../controller/MongoEnv');
mongoose.connect(`mongodb://${env.username}:${env.password}@localhost:27017/blogpost?authSource=admin`, {useNewUrlParser: true}).then((r: any) => console.log(r));
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  body: String,
  user: String,
  image: String,
  date: String,
  updateDate: String,
});

const model = mongoose.model('BlogPost', schema);
module.exports = model;
