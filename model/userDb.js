import {pool} from '../config/config.js'

const getUsersDb = async ()=>{
    try {
        let [data] = await pool.query('SELECT * FROM user_table')
        return data
        
    } catch (error) {
        console.log(error);
        res.status(500).send('failed to fetch users')
    }
}


const fetchUserDb = async  (id)=>{
    try{
        let [[data]] = await pool.query('SELECT * from user_table WHERE user_id=?',[id])
        return data

    } catch(err){
        res.status(500).send('failed to fetch user')
    }
}

const loginUserDb = async  (email)=>{
    try{
        let [[data]] = await pool.query('SELECT * from user_table WHERE email_add=?',[email])
        return data

    } catch(err){
        res.status(500).send('failed to fetch user')
    }
}

const insertUserDb = async (firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile)=>{
    try{
        let [data] = await pool.query('INSERT INTO user_table (firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile) VALUES (?,?,?,?,?,?,?,?)',[firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile])
        return data

    } catch(err){
        res.status(500).send('failed to insert user')
    }
}



const deleteUserDb = async(id)=>{
    try{
        await pool.query('DELETE from user_table WHERE user_id=?',[id])

    } catch(err){
        res.status(500).send('failed to delete user')
    }
}

const updateUserDb = async(firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile,id)=>{
    try{
        let [data] = await pool.query('UPDATE user_table SET firstname =?,lastname=?,user_age=?,user_role=?, email_add=?, user_pass=?, user_profile=? WHERE user_id=?',[firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile,id])
        return data

    } catch(err){
        res.status(500).send('failed to update user')
    }
    
}




export {getUsersDb,fetchUserDb,insertUserDb,deleteUserDb,updateUserDb,loginUserDb}