// import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
// import {fetchUserDb} from '../model/userDb.js'

config()

// const checkUser =async (req,res,next)=>{
//     const {user_profile,user_pass}=req.body
//     // console.log(pass);
//             let token = jwt.sign({user_profile:user_profile},process.env.SECRET_KEY)
//             // console.log(token);
//             req.body.token = token
//             next()
//             return
//         // res.send('password incorrect')
    
// }


export {checkUser}