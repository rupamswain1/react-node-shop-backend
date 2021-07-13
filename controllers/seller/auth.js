const bcrypt=require('bcryptjs');
const Seller=require('../../models/seller');
const {validationResult}=require('express-validator');
const jwt=require('jsonwebtoken');
require('dotenv').config()
exports.signUp=(req,res,next)=>{
    const errors=validationResult(req);
    
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
    
    let hashedpwd=null;
    bcrypt.hash(password,12)
    .then(hashedPassword=>{
        hashedpwd=hashedPassword;
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
        var token=jwt.sign({email:email},process.env.SECRET_CODE,{expiresIn:"1h"})
        res.status(201).json({message:'User Created',token:token,isAuthorised:true});
    })
    .catch(err=>{
        if(err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })

}

exports.login=(req,res,next)=>{
    const validationFailedText='Email or Password enterd is incorrect, Please check again'
    const err=validationResult(req);
    if(!error.isEmpty()){
        const error=new Error('Validation Failed');
        error.statusCode=422;
        error.data=err.array();
        throw error;
    }

    const email=req.body.email;
    const password=req.body.password;
    Seller.findOne({email:emai})
    .then(user=>{
        if(!user){
            const userErr=new Error(validationFailedText);
            userError.statusCode=401;
            throw new userErr;
        }
        return bcrypt.compare(password,user.password)
    })
    .then(result=>{
        if(!result){
            const pwdErr=new Error(validationFailedText);
            pwdError.statusCode=422;
            throw error;
        }
        //send json response
    })
    //add catch
}