module.exports = {selectPresentes,execSQLQuery}


async function connect(){
    if(global.connection && global.connection.state !== 'disconnectd')
        return global.connection;

    const mysql =require("mysql2/promise");
    const connection = await mysql.createConnection("mysqli://root@localhost:3306/casalista");
    console.log("Conectou no MySQL");
    global.connection = connection;
    return connection;
}

async function selectPresentes(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM presentes;');
    return rows;
}



async function execSQLQuery(sqlQry, res){

    const mysql = require('mysql2');
    const connection = mysql.createConnection({
        host        :'localhost',
        port        : 3306,
        user        : 'root',
        password    : '',
        database    : 'casalista'
    });

    connection.query(sqlQry, (error, results, fields) => {
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou pela API!');
  
    });
  }

  
