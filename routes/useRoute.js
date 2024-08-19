import express from 'express'
import {fetchUsers} from '../controller/userController.js'
import {} from '../middleware/authenticate.js'

const router = express.Router()

// router.post('/login',checkUser,loginUser)
router.get('/',fetchUsers)



export default router