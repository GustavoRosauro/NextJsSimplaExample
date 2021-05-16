import { removerCliente } from "../../../db/comerciodb";

export default async (req,res) =>{
    switch(req.method){
        case 'DELETE':{
            const {
                query:{id}
            } = req;
            await removerCliente(id);
            res.status(200).json({mensagem:'removido com sucesso'});
            break;
        }
    }
}