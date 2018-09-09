var mysql  = require('mysql'); 
var connection = mysql.createConnection({    
  host     : '127.0.0.1', 
  user     : 'root', 
  password : 'root', 
  port: '3306', 
  database: 'xas'
});
connection.connect();
var  userGetSql = 'SELECT * FROM a_coin_balance';
//查 query
connection.query(userGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        } 
       console.log('---------------SELECT----------------');
       console.log(result);       
       console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'); 
});
connection.end();