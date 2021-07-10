const bcrypt=require('bcryptjs');
const Seller=require('../../models/seller');
const {validationResult}=require('express-validator');
exports.signUp=(req,res,next)=>{
    const errors=validationResult(req);
    console.log(errors.length)
    if(!errors.isEmpty()){
        const error=new Error('validation failed');
        error.statusCode=422;
        error.data=errors.array();
        throw error;
    }
    const fullName=req.body.fullName;
    const email=req.body.email;
    const password=req.body.password;
    const phoneNo=req.body.phoneNo;
    const houseName=req.body.houseName;
    const address=req.body.address;
    const pin=req.body.pinCode;
    const city=req.body.city;
    const state=req.body.state;

    bcrypt.hash(password,12)
    .then(hashedPassword=>{
        const seller=new Seller({
            email:email,
            password:hashedPassword,
            name:fullName,
            phoneNo:phoneNo,
            houseNo:houseName,
            address:{address:address,
            pin:pin,
            city:city,
            state:state},
            verification:'pending',
            sales:{
                productSold:{}
            }
        })
        return seller.save();
    })
    .then(result=>{
        res.status(201).json({message:'User Created'});
    })
    .catch(err=>{
        if(err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })


}