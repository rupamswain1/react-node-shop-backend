const express=require('express');
const app=express();
const mongoose=require('mongoose');
const category=require('./models/categoryMaster')

mongoose.connect('mongodb+srv://rupam123:rupam123@nodecluster.plaky.mongodb.net/React-Node-Ecomm?retryWrites=true&w=majority')
.then(result=>{
    new category({category:'pwr',subCategory:'nnn'}).save();
    app.listen(8000,()=>{

        console.log("listning")
    })
})
