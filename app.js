const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Master=require('./models/masterData')

//router imports
const sellerRoutes=require('./routes/sellerRoutes')

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/seller',sellerRoutes);

app.use((error,req,res,next)=>{
    //console.log(error);
    const status=error.statusCode||500;
    const message=error.message;
    const data=error.data;
    res.status(status).json({message:message,data:data})
})
mongoose.connect('mongodb+srv://rupam123:rupam123@nodecluster.plaky.mongodb.net/React-Node-Ecomm?retryWrites=true&w=majority')
.then(result=>{
    // new Master({productData:{category:"Appliances",
    // subCategoryData:{
    //     subCategoryAndFeature:{
    //         name:'AC',
    //         features:['capacity','power consumption']
    //     },
    //     subCategoryAndFeature:{
    //         name:'coolers',
    //         features:['fan type','liters']
    //     }
        
    // }}}).save();
    app.listen(8000,()=>{

        console.log("listning")
    })
})
