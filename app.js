console.log("test")
// Require the Express npm Package
const express = require('express');
const { sendFile } = require('express/lib/response');

// Express App
// Creating our server named app
const app = express();

// Make everything inside public available
app.use(express.static('public'));

// Route 

// HTTP Verbs:
// GET - Get information;
// POST - Post new information;
// DELETE - Delete information;
// PUT - Update information;

// Creating a 'GET' Route
app.get('/home', (request, response, next)=>{
    response.sendFile(__dirname + '/views/home.html');
});

// Creat a Second Route

app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html')
})

// Creat a Third Route

app.get('/work', (request, response)=>{
    response.sendFile(__dirname + '/views/work.html')
})

app.get('/photos', (request, response)=>{
    response.sendFile(__dirname + '/views/work.html')
})



// Start the Server
app.listen(3000, ()=> console.log('App is listening on PORT 3000'));