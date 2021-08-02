// - [ ] TODO : Authentication
// - [ ] TODO : Add blog, add image ,add data
// - [ ] TODO: update blog, update image update date
// - [ ] TODO: Session handle
// - [ ] TODO: React front end
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fileUploadHandler = require('express-fileupload');
const indexRouter = require('./routes');
const usersRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const cors = require('cors');
const app = express();
app.use(morgan('combined'));
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
module.exports = app;
