import express from 'express'
import dotenv from 'dotenv'
import {router}  from './root/rootes.js'
import mongoose from 'mongoose'
dotenv.config()

mongoose.connect(process.env.MONGODB)



const PORT = process.env.PORT 
const app = express()
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log(`le serveut est lancer sur le port ${PORT }`)

})


