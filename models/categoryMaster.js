const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const categoryMasterSchema=new Schema({
    productData:{
        category:String,
        subCategoryData:[
            
            {
                name:String,
                features:[],
                manufacturers:[],
            }
        ],
        
    }
});

module.exports=mongoose.model('CategoryMaster',categoryMasterSchema);