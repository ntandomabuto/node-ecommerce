import {pool} from '../config/config.js'


const getUsers = async ()=>{
    let [data] = await pool.query('SELECT * FROM user_table')
    return data
}

const fetchUser = async  (id)=>{
    let [[data]] = await pool.query('SELECT * from user_table WHERE id=?',[id])
    return data
}

const insertUser = async ()=>{
    let [data] = await pool.query('INSERT firstnameINTO users () VALUES ()',[password])
    return data
}



export {getUsers,fetchUser,insertUser}