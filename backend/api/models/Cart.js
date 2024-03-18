const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    menu_item_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Menu'},
    user_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'User'},
    name:{type:String,required:true},
    quantity:{type:Number,required:true},
    image:String,
    price:{type:Number,required:true}
});
const CartModel=mongoose.model('Cart',cartSchema);

module.exports=CartModel;