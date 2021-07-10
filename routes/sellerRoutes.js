const express=require('express');
const router=express();
const {body} = require('express-validator');
//controller imports
const sellerAuth=require('../controllers/seller/auth');

//model import
const Seller=require('../models/seller');
router.post('/signup',
    [
        body('email').isEmail().withMessage('Enter a valid Email address')
        .custom((value,{req})=>{
            return Seller.findOne({email:value}).then(userDoc=>{
                if(userDoc){
                    return Promise.reject("Email Already exist")
                }
            })
        })
        .normalizeEmail(),
        body('password').trim().isLength({min:6}).withMessage('password should be of minimum 6 char long'),
        body('confirmPassword').trim()
        .custom((value,{req})=>{
            if(value!==req.body.password){
                throw new Error('Password and Confirm Password Entered does not match');
            }
            return true;
        }),
        body('phoneNo').isLength({min:10,max:10}).isNumeric(),
       body('fullName').custom((value,{req})=>{
            if(value.length<=0){
                throw new Error('Full Name cannot be blank')
            }
            return true;
        }), 
        body('houseName').custom((value,{req})=>{
            if(!value){
                throw new Error('Value cant be null');
            }
            return true;
        }),
        body('address').custom((value,{req})=>{
            if(!value){
                throw new Error('Address cant be null');
            }
            return true;
        }),
        body('pinCode').isNumeric().custom((value,{req})=>{
            
            if(!value){
                throw new Error('Pincode Cant be blank');
            }
            return true;
        }).isLength({min:6,max:6}).withMessage("pincode should be numeric and length should be 6"),
        body('city').custom((value,{req})=>{
            if(!value){
                throw new Error('city cant be null');
            }
            return true;
        }),
        body('state').custom((value,{req})=>{
            if(!value){
                throw new Error('state cant be blank');  
            }
            return true;
        }),
    ]
,sellerAuth.signUp);


module.exports=router;