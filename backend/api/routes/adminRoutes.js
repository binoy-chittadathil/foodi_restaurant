const express=require('express');
const { getAllUserData } = require('../controllers/adminControllers');
const router=express.Router();

// for getting all user data
router.get('/users',getAllUserData)

module.exports=router