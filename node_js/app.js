//Express nos permite realizar requisições http
const express = require('express');

//Mongoose nos permite ligar o Node.js com o Mongodb
const mongoose = require('mongoose');

const cors = require('cors');

//importando models para serem usadas nas rotas
require('./models/Usuarios');
const Usuarios = mongoose.model('usuarios');

require('./models/Sobre');
const Sobre = mongoose.model('sobre');

require('./models/Contatos');
const Contatos = mongoose.model('contatos');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/", "*");
    res.header("Access-Control-Allow-Method", 'GET, PUT, POST, DELETE');
    app.use(cors());
    next();
});

//cria conexão com o banco de dados
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true

}).then(() => {
    console.log("Conexão com MongoDb realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDb não realizada com sucesso!");
});

//Rota para buscar todos os usuários cadastrados no banco de dados
app.get("/usuarios", (req, res) => {
    
    Usuarios.find({}).then((usuarios) => {
        return res.json(usuarios);
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum usuário encontrado"
        });
    });

});

/* post = é usado para enviar
   get = é usado para buscar
   put = é usado para alterar
   delete = é usado para deletar
*/

//Rota para buscar um usuário cadastrado
app.get("/usuarios/:id", (req, res) => {

    Usuarios.findOne({ _id: req.params.id }).then((usuarios) => {
        return res.json(usuarios);
    }).catch((err) => {
        return res.status(400).json({
            error: true.value,
            message: "Nenhum usuário encontrado!"
        });
    });

});

//Rota que cadastra usuários
app.post("/usuarios", (req, res) => {
    
    Usuarios.create(req.body, (erro) => {
        if (erro) return res.status(400).json({
            error: true,
            message: "Erro: Usuário não cadastrado com sucesso!"
        })

        return res.json({
            error: false,
            message: "Usuário cadastrado com sucesso!"
        })
    });

});

//Rota para editar usuário
app.put("/usuarios/:id", (req, res) => {

    Usuarios.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return req.status(400).json({
            error: true,
            message: "Erro: Usuário não cadastrado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Usuário editado com sucesso!"
        });
    });

});

//Rota para apagar usuário
app.delete("/usuarios/:id", (req, res) => {

    Usuarios.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Usuário não foi apagado!"
        });

        return res.json({
            error: false,
            message: "Usuário apagado com sucesso!"
        });
    });

});

//CRUD Sobre
app.post("/sobre", (req, res) => {
    
    Sobre.create(req.body, (erro) => {
        if (erro) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo da página Sobre não cadastrado com sucesso!"
        })

        return res.json({
            error: false,
            message: "Conteúdo da página Sobre cadastrado com sucesso!"
        })
    });

});

app.get("/sobre", (req, res) => {

    Sobre.findOne({}).then((sobre) => {
        return res.json(sobre);
    }).catch((err) => {
        return res.status(400).json({
            error: true.value,
            message: "Nenhum registro sobre encontrado!"
        });
    });

});

//Crud contatos
app.post("/contatos", (req, res) => {
    
    Contatos.create(req.body, (erro) => {
        if (erro) return res.status(400).json({
            error: true,
            message: "Erro: Contato não cadastrado com sucesso!"
        })

        return res.json({
            error: false,
            message: "Contato cadastrado com sucesso!"
        })
    });

});

//Rota para buscar todos os contatos cadastrados no banco de dados
app.get("/contatos", (req, res) => {
    
    Contatos.find({}).then((contatos) => {
        return res.json(contatos);
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum contato encontrado"
        });
    });

});

//Rota para buscar um contato cadastrado
app.get("/contatos/:id", (req, res) => {

    Contatos.findOne({ _id: req.params.id }).then((contatos) => {
        return res.json(contatos);
    }).catch((err) => {
        return res.status(400).json({
            error: true.value,
            message: "Nenhum contato encontrado!"
        });
    });

});

//Rota para editar contato
app.put("/contatos/:id", (req, res) => {

    Contatos.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return req.status(400).json({
            error: true,
            message: "Erro: Contato não cadastrado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Contato editado com sucesso!"
        });
    });

});

//Rota para apagar contato
app.delete("/contatos/:id", (req, res) => {

    Contatos.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Contato não foi apagado!"
        });

        return res.json({
            error: false,
            message: "Contato apagado com sucesso!"
        });
    });

});

app.listen(8181, () => {
    console.log("Servidor iniciado");
});