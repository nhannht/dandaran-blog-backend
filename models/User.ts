export {};
const mongoose = require('mongoose');
const env = require('../controller/MongoEnv');
const schema = mongoose.Schema;
mongoose.connect(`mongodb://${env.username}:${env.password}@localhost:27017/blogpost?authSource=admin`, {useNewUrlParser: true}).then((r: any) => console.log(r));
const UserSchema = new schema({
  username: String,
  password: String,
});

const model = mongoose.model('User', UserSchema);
module.exports = model;
