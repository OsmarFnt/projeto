const mysql = require('mysql2')
const database = 'estatistica'

const conexao = mysql.createConnection({
    user: 'root',
    password: '020319',
    host:'localhost',
    port: 3306
})

conexao.connect((err) =>{
    if (err){
        console.log('Erro de conexão', err); 
        return
    }
    conexao.query('USE ' + database)
    console.log('\nConexão estabelecida');
})

module.exports = conexao;