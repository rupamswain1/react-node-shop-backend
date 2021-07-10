const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const SellerSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    verification:{
        type:String
    },
    address:{
        houseNo:{
            type:String,
            reuquired:true
        },
        address:{
            type:String,
            required:true
        },
        pin:{
            type:Number,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        }
    },
    sales:{
        productSold:{
            prodId:{
                type:Schema.Types.ObjectId,
                sellingPrice:{
                    type:Number,
                },
                soldOn:{
                    type:Number,
                    default:Date.now
                },
                orderId:{
                    type:String
                },
                quantity:Number,
                orderStatus:String
            }
        }
    }

})

module.exports=mongoose.model('Seller',SellerSchema);