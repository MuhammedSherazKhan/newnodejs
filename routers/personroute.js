const express=require('express')
const Person=require('../models/person')
const router=express.Router()
router.post('/',async(req,res)=>{
    try{
    const data=req.body;
    const newPerson= new Person(data)
    const saveddata=await newPerson.save()
    console.log("person data saved",saveddata);
    res.status(200).json(saveddata)
    }
    catch(err){
        console.log('error in savign person data',err);
        res.status(500).json(err)
    }
})
router.get('/',async(req,res)=>{
    try{
    const data=await Person.find()
    console.log("data fetched si ",data);
    res.status(200).json(data)
    }
    catch(err){
        console.log('error in fetching person data',err);
        res.status(500).json({err:'internal server error'})
    }
})

router.get('/:workvariable',async(req,res)=>{
    const work=req.params.workvariable
    if(work=='waiter'||work=='chef'|| work=='manager'){
    try{
   
    const data= await Person.find({work:work})
    console.log("data fetched si ",data);
    res.status(200).json(data)
    }
    catch(err){
        console.log("error in fetching Person of given worktype",err);
        res.status(500).json(err)
    }
}
else{
    console.log("wrong person paramter given");
    res.status(404).json("not found")
}
})
module.exports=router
