const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const categoryMasterSchema=new Schema({
   category:{
       type:String
   }
});

module.exports=mongoose.model('CategoryMaster',categoryMasterSchema);