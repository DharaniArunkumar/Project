const express=require('express')
require('dotenv').config()
const users=require('./router/user')
const connectDb=require('./config/db')
const app=express()
const cors = require('cors')


app.use('/auth',users)

app.use(cors())
connectDb()

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})