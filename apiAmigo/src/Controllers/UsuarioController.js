const Usuario = require('../Models/Usuario');
module.exports={
    async index(request,response){
        const UsuarioRetorno=await Usuario.find();
        return response.json(UsuarioRetorno);
    },
    async getUsuario(request,response){
        let{idUsuario}=request.params;
        const UsuarioRetorno = await Usuario.find({idUsuario:idUsuario});
        return response.json({UsuarioRetorno});
    },
    async create(request,response){
        let{nome,email,senha,dataNascimento}=request.body;
        const UsuarioRetorno = await Usuario.create({
            nome,
            email,
            senha,
            dataNascimento
        });
        return response.json(UsuarioRetorno);
    },
    async edit(request,response){
        let {nome,email,senha,dataNascimento}=request.body;
        const UsuarioRetorno=await Usuario.updateOne({idUsuario:idUsuario},{$set:{nome:nome,email:email,senha:senha,dataNascimento:dataNascimento}})
        return response.json(UsuarioRetorno);
    },
    async delete(request,response){
        let{idUsuario}=request.body;
        const UsuarioRetorno=await Usuario.deleteOne({idUsuario:idUsuario});
        return response.json(UsuarioRetorno);
    },
}
