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



const deleteUser = async (req,res)=>{
    res.json(await deleteUserDb(req.params.id))
    console.log('Deleted successfully');
}

const updateUser = async (req,res)=>{
    let {firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile} = req.body
    let user_table = await fetchUserDb(req.params.id)
    firstname?firstname=firstname:firstname=user_table.firstname
    lastname?lastname=lastname:lastname=user_table.lastname
    user_age?user_age=user_age:user_age=user_table.user_age
    gender?gender=gender:gender=user_table.gender
    user_role?user_role=user_role:user_role=user_table.user_role
    email_add?email_add=email_add:email_add=user_table.email_add
    user_pass?user_pass=user_pass:user_pass=user_table.user_pass
    user_profile?user_profile=user_profile:user_profile=user_table.user_profile
   
    res.json(await updateUserDb(firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile, req.params.id))
    
}



export {fetchUsers,fetchUser,insertUser,deleteUser,updateUser}