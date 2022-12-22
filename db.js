 async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root@localhost:3306/casalista");
    console.log("Conectou no mysql");
    global.connection = connection;
    return connection;
 }

 async function selectPresentes(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM presentes');
    return rows;
 }

 module.exports = {selectPresentes}

 
