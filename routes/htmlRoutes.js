// initialize the file path
const path = require('path');
// functions to call call the initialized application
module.exports = (app) => {
// getting the file path of html page for the notes
app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
});
// getting the file path for the html front page or main page
app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
});
};



