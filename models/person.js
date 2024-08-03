const mongoose=require('mongoose');
// ex
// define the person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    age:{
        type:Number,
        reqired:true
    }
    ,
    work:{
        type:String,
        required:true,
        enum:['chef','waiter','manager']


    },
    mobile:{
        type:Number,
        required:true
    }
}
)
const Person=mongoose.model('Person',personSchema)
module.exports=Person;