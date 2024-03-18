const express = require('express');
const getAllMenuItems = require('../controllers/menuControllers');
const router = express.Router();

// get all menu items

router.get('/', getAllMenuItems);


module.exports = router
