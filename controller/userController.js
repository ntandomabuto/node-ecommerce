import bcrypt from 'bcrypt'
import {getUsersDb,fetchUserDb,insertUserDb,deleteUserDb,updateUserDb} from '../model/userDb.js'

const fetchUsers = async(req,res)=>{
    res.json(await getUsersDb())
}

const fetchUser = async(req,res)=>{
    res.json(await fetchUserDb(req.params.id))
}

const insertUser = async(req,res)=>{
    let {firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile} = req.body
    bcrypt.hash(user_pass,10,async (error,result)=>{
        if(error) throw error
        console.log(result);
        await insertUserDb(firstname,lastname,user_age,gender,user_role,email_add,result,user_profile)
        res.send('Inserted data sucessfully')
    })
}



export {fetchUsers,fetchUser,insertUser,deleteUser,updateUser}