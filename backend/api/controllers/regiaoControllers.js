const conexao = require('../../config/conexao')

module.exports = {
    regiaoGetAll,
    regiaoById,
    regiaoNew,
    regiaoEdit,
}

function regiaoGetAll(req, res){
    conexao.query('select * from regiao', (err, resultado) => {
        if(err) throw err
        res.json(resultado)
    })
}

function regiaoById(req, res){
    let codigo = req.params.id

    conexao.query('select * from regiao where reg_codigo = ?', [codigo], (err, resultado) => {
        if(err) throw err
        res.json(resultado)
    })
}

function regiaoNew(req, res){
    let codigo = req.body
    codigo.reg_codigo = null

    conexao.query('insert into regiao set ?', [codigo], (err, resultado) => {
        if(err) throw err
        res.json(resultado)
    })
}

function regiaoEdit(req, res){
    let codigo = req.body
    
    const sql = "update regiao set reg_descricao = '" + codigo.reg_descricao + 
    "', reg_sigla = '" + codigo.reg_sigla + 
    "', reg_areakm2 = '" + codigo.reg_areakm2 + 
    "', reg_valorpib = '" + codigo.reg_valorpib + 
    "' where reg_codigo = '" + codigo.reg_codigo

    conexao.query(sql, (err, resultado) => {
        if(err) throw err
        res.json(resultado)
    })
}

