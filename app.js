import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config()

const app = express()
const port = 8080

// Middleware
app.use(express.json())

import authRouter from './routes/authRouter.js'
import productRouter from './routes/productsRouter.js'

// Parent Router
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/', productRouter)

app.use(notFound)
app.use(errorHandler)

// Server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Connection DB
mongoose.connect(process.env.DATABASE, {

}).then(() => {
    console.log("Database Connect")
}).catch((err) => {
    console.log("Database Connection Error:", err)
})