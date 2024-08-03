const mongoose= require('mongoose')
// define mongodb connection url
const mongoURL='mongodb://localhost:27017/hotel'
// setup connection

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongodb server');
})
db.on('disconnected',()=>{
    console.log('failed to connect mongodb server');
})
module.exports=db;