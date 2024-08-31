import express from 'express'


const productRoute=express.Router()

productRoute.get('/')
productRoute.get('/:id')
productRoute.post('/')
productRoute.put('/:id')
productRoute.delete('/:id')


export default productRoute