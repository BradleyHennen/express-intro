const express = require('express');

//Get an instance of express
const app = express();

//Use the public directory we made for static files
app.use(express.static('server/public'));

//Array of stuff to send back

let catArray = ['Tuna', 'Mackerel'];
let dogArray = ['Thompson', 'Winnie', 'Treo'];

//We can get things that are NOT in a file
app.get('/cats', function(req, res) {
    console.log(`In get cats`);
    //Good servers always respond!!
    res.send(catArray);
});

app.get('/dogs', (req, res) => {
    console.log('In get dogs');
    res.send(dogArray);
})

const port = 5000;
app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
})

