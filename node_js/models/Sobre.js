const mongoose = require('mongoose');

const Sobre = new mongoose.Schema({
    titulo: {
        type: String, 
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
},
{
    timestamps: true
});

mongoose.model('sobre', Sobre);