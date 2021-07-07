const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Master=require('./models/masterData')

mongoose.connect('mongodb+srv://rupam123:rupam123@nodecluster.plaky.mongodb.net/React-Node-Ecomm?retryWrites=true&w=majority')
.then(result=>{
    new Master({productData:{category:"Appliances",
    subCategoryData:{
        subCategoryAndFeature:{
            name:'AC',
            features:['capacity','power consumption']
        },
        subCategoryAndFeature:{
            name:'coolers',
            features:['fan type','liters']
        }
        
    }}}).save();
    app.listen(8000,()=>{

        console.log("listning")
    })
})
