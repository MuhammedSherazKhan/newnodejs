// creating a server
// using express
const express=require('express');
const personrouter=require('./routers/personroute')
var app=new express()
const db=require('./db')
const Person=require('./models/person');
const Menu=require('./models/menu')
const bodyParser=require('body-parser')
// server:app
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send('on / server loaded')
})
app.get('/somosa',(req,res)=>{
    res.send('on /somasonsa loaded')
})
// app.post('/person',async (req,res)=>{
//     try{
//     const data=req.body;
//     const newPerson=new Person(data);
//    const response= await newPerson.save()
//    console.log('data saved');
//    res.status(200).json(response)
// }
// catch(err){
//     console.log('not saved');
//     console.log(err);
//     res.status(500).json({err:'internal server error'})
// }
// })
// app.get('/person',async(req,res)=>{
//     try{
//     const data=await Person.find()
//     console.log('data fetched ffrom persona',data);
//     res.status(200).json(data)
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({err:'internal server error'})
//     }

// })
app.use('/person',personrouter)
app.post('/menu',async(req,res)=>{
    try{
    const data=req.body;
    const newMenu=new Menu(data)
    const response=await newMenu.save()
    console.log('data saved',response);
    res.status(200).json(response)
    }
    catch(err){
        console.log('error in saving',err);
        res.status(500).json({err:'internal server error'})
    }
})
app.get('/menu',async(req,res)=>{
    try{
    const data=await Menu.find();
    console.log('menu data fetched',data);
    res.status(200).json(data)
    }
    catch(err){
        console.log('error in menu get ',err);
        res.status(500).json({err:"inernal server error"})
    }
})

require('dotenv').config()
// Now you can access your environment variables using process.env
const port=process.env.port||4000
app.listen(port,()=>{
    console.log('got listened');
})
// now a local host of as:localhost:500 is created
// now search local:host
