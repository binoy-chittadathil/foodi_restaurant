const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const crypto=require('crypto')
const bcrypt=require('bcryptjs');
const User=require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const app = express();

const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

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
    credentials:true,
    origin:['http://localhost:5173','https://foodiiii.netlify.app']
}));
app.use(cookieParser()) //for parsing cookies

//user registration 
app.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;
    const newUser=new User({
        name,
        email,
        password:bcrypt.hashSync(password,10)
    });
    newUser.save()
    .then((data)=>{
        res.json({message:'user registeration successful'})
    })
    .catch((error)=>{
        return res.status(500).json({error:'error ocuuring on user registration'})
    })
});

//user login
app.post('/login',async (req,res)=>{
    const{email,password}=req.body;
    const findedUser=await User.findOne({email});
    if(findedUser){
        //check is the password match
        const passwordTrue=bcrypt.compareSync(password,findedUser.password);
        if(passwordTrue){
            //creating jwt token
            jwt.sign({id:findedUser._id,email:findedUser.email,name:findedUser.name},JWT_SECRET_KEY,{},(err,token)=>{
                if(err){
                    throw err
                }else{
                    res.cookie('token',token,{ sameSite: 'None', secure: true }).json(findedUser)
                }
            })
        }else{
            res.status(422).json({error:'incorrect password'})
        }
    }else{
        res.status(404).json({error:'user not foud'})
    }
});

//user authentication
app.get('/profile',(req,res)=>{
    const {token}=req.cookies;
    if(token){
        //jwt token verification
        jwt.verify(token,JWT_SECRET_KEY,async (err,decodedData)=>{
            if (err){
                res.status(400).json({error:err})
            }
            const {_id,email,name}=await User.findOne({email:decodedData.email})
            res.json({_id,email,name})
        })
    }else{
        res.json(null)
    }
});

//user logout
app.post('/logout',(req,res)=>{
    res.cookie('token','').json(true);
})

app.listen(PORT, () => console.log('server started'))