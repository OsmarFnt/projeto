const conexao = require('../../config/conexao')

module.exports = {
    cidadeGetAll,
    cidadeById,
    cidadeNew,
    cidadeEdit,
}

function cidadeGetAll(req, res){
    conexao.query('select * from cidade', (err, resultado) => {
        if(err) throw err
        res.json(resultado)
    })
}

function cidadeById(req, res){
    let codigo = req.params.id

    conexao.query('select * from cidade where cid_codigo = ?', [codigo], (err, resultado) => {
        if(err) throw err
        res.json(resultado)
    })
}

function cidadeNew(req, res){
    let codigo = req.body
    codigo.cid_codigo = null

    conexao.query('insert into cidade set ?', [codigo], (err, resultado) => {
        if(err) throw err
        res.json(resultado)
    })
}

function cidadeEdit(req, res){
    let codigo = req.body
    
    const sql = "update cidade set cid_descricao = '" + codigo.cid_descricao + 
    "', cid_estado = '" + codigo.cid_estado + 
    "', cid_habitantes = '" + codigo.cid_habitantes + 
    "', cid_economia = '" + codigo.cid_economia + 
    "', cid_anofundacao = '" + codigo.cid_anofundacao + 
    "', reg_codigo = '" + codigo.reg_codigo + 
    "' where cid_codigo = '" + codigo.cid_codigo

    conexao.query(sql, (err, resultado) => {
        if(err) throw err
        res.json(resultado)
    })
}

