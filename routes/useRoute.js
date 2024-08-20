import express from 'express'
import {fetchUsers,fetchUser,insertUser,deleteUser,updateUser} from '../controller/userController.js'
// import {checkUser} from '../middleware/authenticate.js'

const router = express.Router()

// router.post('/login',checkUser)
router.get('/',fetchUsers)
router.post('/insert',insertUser)

router
    .route('/:id')
        .get(fetchUser)
        .delete(deleteUser)
        .patch(updateUser)


export default router