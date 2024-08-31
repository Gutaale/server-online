import mongoose from "mongoose";

const {Schema, model}=mongoose
const {ObjectId}=Schema

const productSchema=Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number
    },
    available:{
        type:Boolean,
    },
    image:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'User'
    }
})


const Product = model('product', productSchema)

export default Product