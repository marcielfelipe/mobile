const mongoose=require('mongoose');
const GrupoSchema=new mongoose.Schema({
    idGrupo:String,
    idUsuario:String,
    nome:String,
    dataSorteio:Date,
    valorMinimo:String,
    valorMaximo:String
});

module.exports=mongoose.model('Grupo',GrupoSchema);
