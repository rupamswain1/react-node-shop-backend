const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const categoryMasterSchema=new Schema({
   category:{
       type:Object
   }
});

module.exports=mongoose.model('CategoryMaster',categoryMasterSchema);