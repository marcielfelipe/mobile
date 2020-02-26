const{Router}= require('express');

const UsuarioController=require('./Controllers/UsuarioController');
//const GrupoController=require('./Controllers/GrupoController');

const route=Router();

route.get('/usuario',UsuarioController.index);
route.get('/usuario/:idUsuario',UsuarioController.getUsuario);
route.post('./usuario',UsuarioController.create);
route.put('./usuario',UsuarioController.edit);
route.delete('./usuario',UsuarioController.delete);

//route.get('./grupo',GrupoController.index);
//route.get('./grupo/:idGrupo',GrupoController.getGrupo);
//route.post('./grupo',GrupoController.create);
//route.put('./grupo',GrupoController.edit);
//route.delete('./grupo',GrupoController.delete);



module.exports=route;