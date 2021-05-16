import executeQuery from "./db";

export async function retornaClientes(){
    try{
        const result = await executeQuery({
            query:'SELECT id,nome,email,idade FROM CLIENTES',
            values:[]
        });
        return result;
    }catch(error){
        console.log(error);
    }
}
export async function inserirCliente(user){
    try {
        const result = await executeQuery({
            query:'INSERT INTO CLIENTES (nome,email,idade) values (?,?,?)',
            values:[user.nome,user.email,user.idade]
        })
        return result;
    } catch (error) {
        console.log(error);
    }
}
export async function removerCliente(id){
    try {
        const result = await executeQuery({
            query:'DELETE FROM CLIENTES WHERE ID = ?',
            values:[id] 
        });
        return result;
    } catch (error) {
        console.log(error)
    }
}