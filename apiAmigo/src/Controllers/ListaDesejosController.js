const ListaDesejos=require('../Models/ListaDesejos');

module.exports={
    async index(request,response){
        const ListaDesejosRetorno=await ListaDesejos.find();
        return response.json(ListaDesejosRetorno);
    },
    async getListaDesejos(request,response){
        let{idLista}=request.params;
        //inserir aluno no banco mongodb
        const ListaDesejosRetorno=await ListaDesejos.find({idLista:idLista});
        return response.json(ListaDesejosRetorno);
    },
    async create(request,response){
        let{qtdItens,descricao}=request.body;
        //inserir no banco mongodb
        const ListaDesejosRetorno=await ListaDesejos.create({
            qtdItens,
            descricao
        });
        return response.json(ListaDesejosRetorno);
    },
    async edit(request,response){
        let{qtdItens,descricao}=request.body;
        //atualizar no banco mongodb
        const ListaDesejosRetorno=await ListaDesejos.updateOne({idLista:idLista},{$set:{qtdItens:qtditens}})
        return response.json(ListaDesejosRetorno);
    },
    async delete(request,response){
        let{idLista}=request.body;
        //delete no banco mongodb
        const ListaDesejosRetorno=await ListaDesejos.deleteOne({idLista:idLista});
        return response.json(ListaDesejosRetorno);
    },
}