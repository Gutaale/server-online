import Product from '../models/productModel.js'


const getAllProducts=async(req,res)=>{
    try{
        const products=Product.find()
        res.status(200).json(products)
    }catch(err){
        res.status(404).json(products)
    }
}

