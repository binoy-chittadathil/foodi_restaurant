const User=require('../models/User');

// function for get all user data
const getAllUserData=(req,res)=>{
    User.find({}).then(data=>{
        res.status(200).json(data)
    }).catch(err=>{
        res.status(400).json({message:'no data found'})
    })
};

module.exports={
    getAllUserData
}