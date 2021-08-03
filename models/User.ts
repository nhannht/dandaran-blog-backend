export {};
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const env = require('../controller/MongoEnv');
const schema = mongoose.Schema;
mongoose.connect(`mongodb://${env.username}:${env.password}@localhost:27017/blogpost?authSource=admin`, {useNewUrlParser: true}).then((r: any) => console.log(r));
const UserSchema = new schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function(next) {
  const user = this;

  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

const model = mongoose.model('User', UserSchema);
module.exports = model;
