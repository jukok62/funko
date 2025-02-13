const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'userPop',
    password: 'Uqk439y9VaUe4S',
    port: 3307,
    database: 'funko_pop'
});

connection.connect((err) => {
    if(err){
        console.log(err.stack); 
        return;
    } console.log(connection.threadId);
});

module.exports = connection;