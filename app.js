const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const Product=require('./models/productMaster')

//router imports
const sellerRoutes=require('./routes/sellerRoutes')

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS,GET,POST,PUT,PATCH,DELETE");
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

app.use('/seller',sellerRoutes);

app.use((error,req,res,next)=>{
    //console.log(error);
    const status=error.statusCode||500;
    const message=error.message;
    const data=error.data;
    res.status(status).json({message:message,data:data})
})
mongoose.connect('')//MongoDB key here
.then(result=>{
//     for(let a=0;a<100000;a++){
//     new Product({
//         category:"Electronics",
//         subCategory:"Mobile",
//         price:15999,
//         quantitySold:0,
//         sellers:[
//             {
//                 sellerId:'60ef2be32f2e841d737242e3',
//                 quantityAvailable:100,
//                 sellingPrice:9999
//             }
//         ],
//         manufacturer:"Samsung",
//         model:"M31",
//         about:"This is a samsung mobile",
//         ratings:[4,4.5,3],
//         countryOfOrigin:"India",
//         productFeatures:[{featureName:"Battery",value:"10000mAh"},{featureName:"screen Size",value:"15 inch"}]
//     }).save();
// }
    app.listen(8000,()=>{

        console.log("listning")
    })
})
