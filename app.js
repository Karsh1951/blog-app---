//creating all the express server
require('dotenv').config();

//creating an express server
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');


const app = express();
const PORT = 5001 || process.env.PORT;


//connect to databas
connectDB();
//creating a folder for storing public items
app.use(express.static('public'));



//templating engine
app.use(expressLayout);
app.set('layout','./layouts/main');
//setting the view engine
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});