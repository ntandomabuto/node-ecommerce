import express from 'express'
import {getPro,getOne,insertOne,deleteOne,updateOne} from '../controller/productController.js'

const router = express.Router()

router.get('/',getPro)
router.post('/insert',insertOne)

router  
    .route('/:id')
        .get(getOne)
        .delete(deleteOne)
        .patch(updateOne)


export default router