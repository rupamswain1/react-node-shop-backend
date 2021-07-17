CategoryMaster.insertMany([
    {
        productData:{
            category:"Electronics",
            subCategoryData:[
                {
                    name:"Mobile",
                    features:["Battery","CPU","Screen Size","Dimensions","Ports","Color","RAM","ROM","Display","Front Camera","Rear Camera"],
                    manufacturers:["Mi","Xiomi","Samsung","Apple"]
                },
                {
                    name:"Laptop",
                    features:["Battery","Processor Brand","Processor Type","Processor Speed","Memory Technology","Graphics Chipset Brand","Number of USB 3.0 Ports","Item Weight","Size","Dimensions","Ports","Color","RAM","HDD","Display","Front Camera","Graphics","Operating System", "Screen Resolution"],
                    manufacturers:['Apple',"Lenovo","Asus"]
                }
            ]
        }
    },
    {
        productData:{
            category:"Books",
            subCategoryData:[
                {
                    name:"Fiction",
                    features:["Pages","Author","Publisher","Publishing Date"]
                }

            ]
        }
    },
    {
        productData:{
            category:"Furniture",
            subCategoryData:[
                {
                    name:"Bean Bag",
                    features:["Capacity","Weight"],
                    manufacturers:["Bean comp"]
                },
                {
                    name:"Office Chair",
                    features:["Capacity","Weight", "No of Wheels","Neck Support","Back Support","Adjustable","Tiltable", "Degree Tiltable", "No of Wheels","Material"],
                    manufacturers:['Game Diaz']

                }

            ]
        }
    }]).then(res=>console.log(res)).catch(err=>console.log(err))