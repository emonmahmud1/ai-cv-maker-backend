const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000

dotenv.config();
const app = express();

const connectDb = async ()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ DB Connection Error:', error.message);
    process.exit(1);
  }
}
connectDb()

app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('welcome ai cv maker')
})


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
} )