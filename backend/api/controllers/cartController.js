const jwt = require('jsonwebtoken');
const Cart = require('../models/Cart');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// function for add cart data to database

const addCartItem = (req, res) => {
    const { token } = req.cookies;

    if (token) {
        //jwt token verification
        jwt.verify(token, JWT_SECRET_KEY, async (err, decodedData) => {
            if (err) {
                res.status(400).json({ error: err })
            }
            const user_id = decodedData.id;
            const { _id, name, price, image } = req.body;
            // finding user cart data
            const userCartData=await Cart.find({user_id});
            // check whether the data to be added is already executed or not
            const filteredRepeatedData=await userCartData.some(data=>{
                return data.menu_item_id.toString()===_id
            });

            if(filteredRepeatedData){
                return res.status(403).json({error:'data already executed'})
            }

            const newCart = new Cart({
                menu_item_id: _id,
                user_id,
                name,
                quantity: 1,
                image,
                price
            });
            await newCart.save().then((data) => {
                res.json({ message: 'data successfully added to database' })
            }).catch(err => {
                res.status(500).json({ error: 'data saving failed', err })
            })
        })
    } else {
        res.status(400).json({ error: 'tocken not found' })
    }
};

// function for get cart data from database

const getCartItem = (req, res) => {
    const { token } = req.cookies;

    if (token) {
        //jwt token verification
        jwt.verify(token, JWT_SECRET_KEY, async (err, decodedData) => {
            if (err) {
                res.status(400).json({ error: err })
            }
            const user_id = decodedData.id;
            await Cart.find({ user_id: user_id }).then((data) => {
                res.status(200).json(data)
            }).catch(err => {
                res.status(400).json('no data found')
            })
        })
    } else {
        res.status(400).json({ error: 'tocken not found' })
    }
};

// function for delete cart item

const deleteCartItem = async (req, res) => {
    const { cartId } = req.params;
    await Cart.deleteOne({ _id: cartId }).then(() => {
        res.status(200).json({ message: 'successfully deleted' })
    }).catch(err => {
        res.status(501).json({ error: 'no data deleted', err })
    })
};

// function for update cart quantity

const updateCartQuantity = async (req, res) => {
    const { cartId } = req.params;
    const { quantity } = req.body;
    await Cart.updateOne({ _id: cartId }, { quantity }).then(() => {
        res.status(200).json({ message: 'quantity successfully updated' })
    }).catch(err => {
        res.status(501).json({ error: 'un able to update quantity', err })
    })
}


module.exports = {
    addCartItem,
    getCartItem,
    deleteCartItem,
    updateCartQuantity
}