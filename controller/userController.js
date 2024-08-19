// import bcrypt from 'bcrypt'
import {getUsers} from '../model/userDb.js'

const fetchUsers = async(req,res)=>{
    res.json(await getUsers())
}




export {fetchUsers}