import {pool} from '../config/config.js'

const getUsersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM user_table')
    return data
}


const fetchUserDb = async  (id)=>{
    let [[data]] = await pool.query('SELECT * from user_table WHERE user_id=?',[id])
    return data
}




export {getUsersDb,fetchUserDb,insertUserDb,deleteUserDb,updateUserDb}