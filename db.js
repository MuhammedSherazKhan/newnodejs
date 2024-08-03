const mongoose= require('mongoose')
// define mongodb connection url
// const mongoURL='mongodb://localhost:27017/hotel'
// const mongoURL='mongodb+srv://shaazkhan2003:sheraz321@cluster0.i7h7mss.mongodb.net/'
require('dotenv').config()
// Now you can access your environment variables using process.env
const port=process.env.port||4000
const mongoURL=process.env.url
// setup connection

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds`
  socketTimeoutMS: 60000, // Increase socket timeout to 60 seconds
});

const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongodb server');
})
db.on('disconnected',()=>{
    console.log('failed to connect mongodb server');
})
module.exports=db;