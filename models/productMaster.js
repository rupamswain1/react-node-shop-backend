const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productMaster= new Schema({
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
    sellingPrice:{
        type:Number,
        required:true
    },
    seller:{
        sellerId:{
            type:Schema.Types.ObjectId,
            required:true,
            ref:'SellerMaster'
        },
        quantityAvailable:{
            type:Number,
            required:true
        }
        //complete this
    },
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
    ratings:{
        type:Array,
    },
    comments:{
        customerId:{
            type: Schema.Types.ObjectId,
            ref:'CustomerMaster',
        }, 
        comment:{
            type:String,
        } 
    },
    quantityPurchased:{
        type:Number,
        required:true
    },
    energyEfficiency:{
        type:Number
    },
    capacity:{
        type:String
    },
    specialFeatures:{
        type:String
    },
    color:{
        type:String
    },
    voltage:{
        type:String
    },
    material:{
        type:String
    },
    countryOfOrigin:{
        type:String
    },
    operatingSystem:{
        type:String
    },
    hardDisk:String,
    displayType:String,
    cpu:String,
    graphicCard:String,
    ram:String,
    display:String,
    battery:String,
    ports:String,
    warrenty: String,
    connectivity:{
        type:Array
    },
    inTheBox:{
        type:Array
    },
    os:String,
    specialFeature:String,
    displayTyoe:String,
    camera:String,
    weight:Number,
    addedOn: { type: Date, default: Date.now },
    dimension:{
        height:String,
        width:String
    },
    



});