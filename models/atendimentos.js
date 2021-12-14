const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res) {
  
   
        const sql = 'INSERT INTO Atendimentos SET ?'
    
        conexao.query(sql, atendimento, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(atendimento)
                }
            })
        }
       
    }


module.exports = new Atendimento