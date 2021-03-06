// call the npm package express to run this code/file
const express = require('express');

// initializing the app from express server
const app = express();
// assign the url path/port
const PORT = process.env.PORT || 3001;

// use middleware for the root of the file path
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// call the routes for the files
 require('./routes/apiRoutes')(app);
 require('./routes/htmlRoutes')(app);

// calling the port to functions
app.listen(PORT, () =>
  console.log(`API server now on port ${PORT}!`)
);
