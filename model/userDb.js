import {pool} from '../config/config.js'


const getUsersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM user_table')
    return data
}

const fetchUserDb = async  (id)=>{
    let [[data]] = await pool.query('SELECT * from user_table WHERE user_id=?',[id])
    return data
}

const insertUserDb = async (firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile)=>{
    let [data] = await pool.query('INSERT INTO user_table (firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile) VALUES (?,?,?,?,?,?,?,?)',[firstname,lastname,user_age,gender,user_role,email_add,user_pass,user_profile])
    return data
}



export {getUsersDb,fetchUserDb,insertUserDb}