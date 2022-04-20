const mongoose =require('../db/connnection');

const HowtoSchema = new mongoose.Schema(
    {
        title: {type:String, 
            required:true},
        description:String,
        url:String,
        dateAdded:Date,
        img:String,
    
    },
        
        {timestamps:true}
    )
        
const Howto = mongoose.model('Howto', HowtoSchema);
module.exports=Howto;
        
        
        
        
//         url:String,
//         dateAdded: Date,
// img:{type:String,default:null}