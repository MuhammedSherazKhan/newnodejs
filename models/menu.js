const mongoose=require('mongoose')
const menuSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    categoryVegNonveg:{
        type:String,
        required:true,
        enum:['Veg','Nonveg']
    }
    ,
    price:{
        type:Number,
        required:true
    }
})
console.log('menu imported');
const Menu=mongoose.model('Menu',menuSchema)
module.exports=Menu;