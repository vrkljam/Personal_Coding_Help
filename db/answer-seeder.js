
const Howto =require('../model/answer-model');
const seedData = require('./answer-seeds.json');

Howto.deleteMany({})
    .then(()=>{
        return Howto.insertMany(seedData)
    })
    .catch(console.error)
    .finally(()=>{
        process.exit()
    });