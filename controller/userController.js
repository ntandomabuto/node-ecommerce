import bcrypt from 'bcrypt'
import {getUsersDb,fetchUserDb,insertUserDb,deleteUserDb,updateUserDb} from '../model/userDb.js'

const fetchUsers = async(req,res)=>{
    res.json(await getUsersDb())
}

const fetchUser = async(req,res)=>{
    res.json(await fetchUserDb(req.params.id))
}



export {fetchUsers,fetchUser,insertUser,deleteUser,updateUser}