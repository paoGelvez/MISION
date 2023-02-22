import {createPool} from 'mysql2/promise';
// import dotenv from 'dotenv';
// dotenv.config({path : '.env'});


export const pool = createPool({
    host: 'localhost',
    user: "root",
    password: '',
    port: 3306,
    database: 'misionfinal'
});