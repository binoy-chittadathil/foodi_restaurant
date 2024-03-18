const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
const userRoutes = require('./api/routes/userRoutes');
const adminRoutes= require('./api/routes/adminRoutes')
const app = express();

const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

//mongodb connection start
mongoose.connect(MONGO_DB_URL);
const conn = mongoose.connection;
conn.once('open', () => { console.log('database connection successful') });
conn.on('error', () => {
    console.log('error connecting to data base');
    process.exit();
})
//mongodb connection end

app.use(express.json()); //for parsing data
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173', 'https://foodiiii.netlify.app']
}));
app.use(cookieParser()) //for parsing cookies

// use routes here
app.use('/user', userRoutes);
app.use('/menus', menuRoutes);
app.use('/cart', cartRoutes);
app.use('/admin',adminRoutes);


app.listen(PORT, () => console.log('server started'))