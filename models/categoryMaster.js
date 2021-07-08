const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const categoryMasterSchema=new Schema({
    productData:{
        category:String,
        subCategoryData:{
            
            subCategoryAndFeature:{
                
                name:String,
                features:Array
            }
        },
        
    }
});

module.exports=mongoose.model('CategoryMaster',categoryMasterSchema);