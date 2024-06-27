import React from 'react';

const FormUsuario = ({
  formData,
  formErrors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="cadastro-usuario">
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        {formErrors.nome && <span style={{ color: 'red' }}>{formErrors.nome}</span>}
      </label>

      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}
      </label>

      <label>
        Idade:
        <input
          type="text"
          name="idade"
          value={formData.idade}
          onChange={handleChange}
        />
        {formErrors.idade && <span style={{ color: 'red' }}>{formErrors.idade}</span>}
      </label>

      <br />

      <button className="btn btn-primary" type="submit">
        Salvar
      </button>
    </form>
  );
};

export default FormUsuario;