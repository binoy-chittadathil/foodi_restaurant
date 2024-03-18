const express = require('express');
const { addCartItem, getCartItem, deleteCartItem, updateCartQuantity } = require('../controllers/cartController');
const router = express.Router();

// add cart data to the data base
router.post('/', addCartItem);

// get cart data from database
router.get('/', getCartItem);

// delete cart item
router.delete('/:cartId', deleteCartItem);

// update cart quantity

router.put('/:cartId', updateCartQuantity)

module.exports = router