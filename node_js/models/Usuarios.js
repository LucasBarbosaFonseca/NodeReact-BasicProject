const mongoose = require('mongoose');

const Usuarios = new mongoose.Schema({
    nome: {
        type: String, 
        require: true
    },
    email: {
        type: String,
        require: true
    },
},
{
    timestamps: true
});

mongoose.model('usuarios', Usuarios);