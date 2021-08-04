// - [ ] TODO : Authentication
// - [ ] TODO : Add blog, add image ,add data
// - [ ] TODO: update blog, update image update date
// - [ ] TODO: Session handle
// - [ ] TODO: React front end
import {CustomRequest} from './interface/customRequest';
import {CustomResponse} from './interface/customResponse';
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fileUploadHandler = require('express-fileupload');
const indexRouter = require('./routes');
const usersRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const cors = require('cors');
const app = express();
app.use(session(
    {
      resave: true,
      saveUninitialized: true,
      secret: 'somesecret',
      cookie: {maxAge: 60000},
    },
));
// app.use(morgan('combined'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUploadHandler(
    {createParentPath: true},
));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postRouter);

app.get('/logout', (req:CustomRequest, res:CustomResponse) => {
  req.session.destroy(() => {
    res.status(200).send('Wtf');
  },
  );
});

module.exports = app;
