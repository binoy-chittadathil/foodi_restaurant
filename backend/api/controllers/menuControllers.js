const Menu = require('../models/Menu');

const getAllMenuItems = async (req, res) => {
    await Menu.find({}).then((data) => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(400).json({ error: 'data not found' })
    })
};


module.exports = getAllMenuItems