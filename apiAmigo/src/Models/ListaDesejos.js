const mongoose = require('mongoose');
const ListaDesejosSchema = new mongoose.Schema({
    idLista:String,
    idUsuario:String,
    idGrupo:String,
    qtdItens:String,
    descricao:String
});

module.exports=mongoose.model('ListaDesejos',ListaDesejosSchema);