const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

//image upload
const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  // Destination to store image     
  destination: function (req, file, cb) {
    cb(null, 'images')
    }, 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() 
      + path.extname(file.originalname))
      // file.fieldname is name of the field (image)
      // path.extname get the uploaded file extension
  }
});

const upload = multer({ storage: storage})

// For Single image upload
app.post('/upload', upload.single('image'), (req, res) => {
  res.send("Image Uploaded")
 
});


// Route includes
const userRouter = require('./routes/user.router');
const shelfRouter = require('./routes/shelf.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/shelf', shelfRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
