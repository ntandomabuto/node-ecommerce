import {compare} from "bcrypt";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
import {fetchUserDb} from '../model/userDb.js'

config()

const checkUser =async (req,res,next)=>{
    const {email_add,user_pass}=req.body
    let pass = (await fetchUserDb(email_add)).user_pass
    //console.log(pass);
    compare (user_pass,pass,(err,result)=>{
        if(result == true){
            let token = jwt.sign({email_add:email_add},process.env.SECRET_KEY)
            console.log(token);
            req.body.token = token
            next()
            return
        }
        res.send('password incorrect')
    })
    
}

const verifyAToken = (req,res,next)=>{
    jwt.verify(req.body.token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err) throw err
           req.body.user=decoded.email_add
    console.log(decoded);        
    })
    next()
}


export {checkUser,verifyAToken}