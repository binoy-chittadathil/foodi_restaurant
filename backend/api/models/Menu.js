const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    name:String,
    recipe:String,
    image:String,
    category:String,
    price:Number
});
const MenuModel=mongoose.model('Menu',menuSchema);

module.exports=MenuModel;