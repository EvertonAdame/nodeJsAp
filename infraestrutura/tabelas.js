class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, email varchar(50) NOT NULL, nome varchar(20), telefone varchar(20) NOT NULL, senha varchar(50) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas