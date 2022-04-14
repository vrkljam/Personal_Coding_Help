const mongoose =require('mongoose');

const HowtoSchema = new mongoose.Schema({

    title: {type:String, 
            required:true},
    url:String,
    dateAdded: Date,
    description:String,
    img:String,
    },

    {timestamps:true}
)

const How = mongoose.model('How', HowtoSchema);
module.exports=How;