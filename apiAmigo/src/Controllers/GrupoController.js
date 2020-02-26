const Grupo = require('../Models/Grupo');

module.exports={
    async index(request,response){
        const GrupoRetorno=await Grupo.find();
        return response.json(GrupoRetorno);
    },
    async getGrupo(request,response){
        let{idGrupo}=request.params;
        //inserir aluno no banco mongodb
        const GrupoRetorno=await Grupo.find({idGrupo:idGrupo});
        return response.json(GrupoRetorno);
    },
    async create(request,response){
        let{nome,dataSorteio,valorMinimo,valorMaximo}=request.body;
        //inserir no banco mongodb
        const GrupoRetorno=await Grupo.create({
            nome,
            dataSorteio,
            valorMinimo,
            valorMaximo,           
        });
        return response.json(GrupoRetorno);
    },
    async edit(request,response){
        let{nome,dataSorteio,valorMinimo,valorMaximo}=request.body;
        //atualizar no banco mongodb
        const GrupoRetorno=await Grupo.updateOne({idGrupo:idGrupo},{$set:{nome:nome,dataSorteio:dataSorteio,valorMinimo:valorMinimo,valorMaximo:valorMaximo}})
        return response.json(GrupoRetorno);
    },
    async delete(request,response){
        let{idGrupo}=request.body;
        //delete no banco mongodb
        const GrupoRetorno=await Grupo.deleteOne({idGrupo:idGrupo});
        return response.json(GrupoRetorno);
    },
}