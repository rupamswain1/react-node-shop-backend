const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productMasterSchema= new Schema({
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantitySold:{
        type:Number,
        required:true
    },
    addedOn:{
        type:Date,
        default:Date.now
    },
    sellers:[
        {
            sellerId:{
                type:Schema.Types.ObjectId,
                required:true,
                ref:'SellerMaster'
            },
            quantityAvailable:{
                type:Number,
                required:true
            },
            sellingPrice:{
                type:Number,
                required:true
            }
        //complete this
    }],
    manufacturer:{
        type:String,
        required:true
    },
    model:{
        type:String,
    },
    about:{
        type:String,
        required:true
    },
    ratings:[],
       
    comments:{
        comment:{
            customerId:{
                type: Schema.Types.ObjectId,
                ref:'CustomerMaster',
            }, 
            comment:{
                type:String,
            } 
        }
    },
    countryOfOrigin:{
        type:String,
        required:true
    },
    productFeatures:[
        {
            featureName:String,
            value:String,
        }
    ]

});
module.exports=mongoose.model('ProductMaster',productMasterSchema);