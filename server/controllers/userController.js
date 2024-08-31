import User from '../models/userModel.js'
// CRUD OPERATIONS
export const getUser= async (req, res)=>{
    try{
        const users = await User.find() // select * from users
        res.status(200).json(users)
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const getUserById= async (req, res)=>{
const id=req.params.id
try{
    const user = await User.findById(id) // select from users where id=id
    res.status(200).json(user)

}catch(err){
    res.status(404).json({message: err.message})
}
}
export const creatUser= async(req, res)=>{
    const {name, email, phone}=req.body
    // const name=req.body.name
    // const email=req.body.email
    // const phone=req.body.phone
    try{
        const user=new User({
            name,
            email,
            phone,
        })
        await user.save()
        res.status(201).json(user)
    }catch(err){
        res.status(404).json({message: err.message})
    }
}
export const updateUser= async(req, res)=>{
    const id = req.params.id
    const {name, email, phone}=req.body
    try{
        const user= await User.findByIdAndUpdate(id,{
            name,
            email,
            phone,
        })
        // await user.save()
        res.status(201).json(user)
    }catch(err){
        res.status(404).json({message: err.message})
    }
    
}
export const deleteUser= async(req, res)=>{
    const id = req.params.id
    try{
        const user=await User.findByIdAndDelete(id)
        res.status(200).json(user)
    }catch(err){
        res.status(404).json({message: err.message})
    }

}