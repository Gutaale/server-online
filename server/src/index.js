import express from 'express'
import dotenv from 'dotenv/config'
import router from '../routes/userRouts.js'
import productRoute from '../routes/productsRoute.js'
import mongoose from 'mongoose'
import cors from 'cors'
const app=express()
app.use(cors())

const PORT=process.env.PORT || 3001
app.use(express.json())
app.use('/',router)
app.use('/products', productRoute)

mongoose.connect(process.env.DB_CON_URL)
.then(()=>console.log("Database Connected"))



app.listen(PORT, ()=>console.log(`Server is running on http://localhost:${PORT}`))