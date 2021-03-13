const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const passport = require('passport');
const passportConfig = require('./configs/passport');

// set up view engine
app.set('view engine', 'ejs');

// serve static file
app.use(express.static("public"));
app.use(passport.initialize());

// handle routes
app.use('/auth', require('./routes/auth/index.js')); // route position order is important
app.use('/', (req, res) => {
    res.render('index');
})


app.listen(port, console.log(`🚀 Server is running on port ${port}`));