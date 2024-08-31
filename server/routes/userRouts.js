import express from 'express'
import { 
    getUser, 
    getUserById,
    creatUser,
    updateUser,
    deleteUser } from '../controllers/userController.js'


const router=express.Router()


router.get('/', getUser)
router.get('/:id', getUserById)
router.post('/', creatUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router