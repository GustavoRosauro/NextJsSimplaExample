import { inserirCliente, removerCliente, retornaClientes } from '../../db/comerciodb.js';
export default async (req,res) =>{
    switch(req.method){
    case 'GET':{
        let data = await retornaClientes();
        res.status(200).json(data); 
        break;
    }
    case 'POST':{
        console.log(req.body);
        await inserirCliente(req.body);
        res.status(200).json({mensagem:'inserido com sucesso!'})
    }    
}
}