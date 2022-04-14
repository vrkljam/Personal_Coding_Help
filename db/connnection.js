const mongoose =require('mongoose');

const mongoURI=
process.env.NODE_ENV==='production'
?process.env.DB_URL
:"mongodb+srv://mikev:mikev@cluster0.ap9gd.mogodb.net/howto?retryWrites=true&w=majority";

mongoose.connect(mogoURI)
    .then(instance=>console.log(`connected to : ${instance.connections[0].name}`))
    .catch(error=>console.log(`failed to connect`, error))


module.exports=mongoose
