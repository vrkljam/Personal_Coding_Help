const mongoose =require('../db/connnection');


const HowtoSchema = new mongoose.Schema(
        {
        title: {type:String, 
            required:true},
            description:String,
            url:String,
            dateAdded:Date,
            img:String,
            category:[String]
        },
        
        {timestamps:true}
        )
        
        const Howto = mongoose.model('Howto', HowtoSchema);
        module.exports=Howto;
        
        
        // category:[CategorySchema]  
        
        // img:{type:String,default:null}
        // const CategorySchema = new mongoose.Schema ({
        //     name:String
        // })