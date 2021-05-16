import React, { useEffect, useState } from 'react'
const teste = () => {
    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        idade: 0
    })
    useEffect(() => {
        carregarClientes();
    }, []);
    const carregarClientes = () => {
        fetch('/api/comercio').then(x => x.json())
            .then(x => setClientes(x));
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCliente({
            ...cliente, [name]: value
        })
    }
    const salvarCliente = () => {
        console.log(cliente);
        fetch('/api/comercio', {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        }).then(() => {
            alert('Usuario inserido com sucesso');
            setCliente({
                nome: '',
                email: '',
                idade: 0
            })
            carregarClientes();
        })
    }
    const removerCliente = (id)=>{
        fetch('api/comercio/'+id,{
            method:'DELETE',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        }).then(()=>{
            carregarClientes();
        })
    }
    
    return (<>
        <h1>Consulta Clientes</h1>
        <div className='col-md-4'>
            <label>Nome: </label>
            <input className='form-control' name='nome' value={cliente.nome} onChange={handleInputChange} />
            <label>E-mail</label>
            <input className='form-control' name='email' value={cliente.email} onChange={handleInputChange} />
            <label>Idade</label>
            <input className='form-control' name='idade' value={cliente.idade} onChange={handleInputChange} />
            <br/>
            <button className='btn btn-success' onClick={salvarCliente}>Salvar</button>
        </div>
        { clientes.map((x) => (
            <p>nome: {x.nome} email: {x.email} idade:{x.idade}   <button className='btn btn-danger' onClick={()=>{removerCliente(x.id)}}>Remover</button></p>
        ))}
    </>)
}
export default teste;