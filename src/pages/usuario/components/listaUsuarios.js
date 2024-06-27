import React from "react";

const ListaUsuarios = ({ usuarios, handleEdit, handleDelete }) => {
  return (
    <>
      {usuarios.map((item, index) => (
        <div key={index}>
          <h3>Dados do Formulário:</h3>
          <p>Nome: {item.nome}</p>
          <p>Email: {item.email}</p>
          <p>Idade: {item.idade}</p>
          <button onClick={() => handleEdit(item, index)} type="button">
            Editar
          </button>
          <button onClick={() => handleDelete(item)} type="button">
            Excluir
          </button>
        </div>
      ))}
    </>
  );
};

export default ListaUsuarios;