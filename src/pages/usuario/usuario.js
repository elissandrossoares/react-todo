import './usuario.css';
import { useEffect, useState } from 'react';
import { adicionarUsuario, deletarUsuario, editarUsuario, listarUsuarios } from './usuarioService'
import FormUsuario  from './components/formUsuario';
import ListaUsuarios from './components/listaUsuarios';
import isValidEmail from  '../../helpers/emailValidator';

function Usuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [editIndex, setEditIndex]= useState(null);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
  })

  const [formErrors, setFormErrors] = useState({
    nome: '',
    email: '',
    idade: '',
  })

  useEffect(() => {
    const usuarios = listarUsuarios();
    
    setUsuarios(usuarios);
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
     ...formData,
      [name]: value
    })

    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (formData.nome.trim() === '') {
      errors.nome = 'O nome é obrigatório.';
    }

    if (formData.email.trim() === '') {
      errors.email = 'O email é obrigatório.';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Formato de email inválido.';
    }

    if (formData.idade.trim() === '') {
      errors.idade = 'A idade é obrigatória.';
    } else if (isNaN(formData.idade) || parseInt(formData.idade) <= 0) {
      errors.idade = 'A idade deve ser um número positivo.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);

      return;
    }

    if (editIndex != null) {
      editar();
    } else {
      adicionar();
    }

    setFormData({
      nome: '',
      email: '',
      idade: '',
    })

    setFormErrors({
      name: '',
      email: '',
      age: ''
    });

    setEditIndex(null);
  }

  const editar = (item) => {
    const updatedUsers = editarUsuario(editIndex, formData)

    setUsuarios(updatedUsers);
  }
  
  const adicionar = () => {
    const updatedUsers = adicionarUsuario(formData);

    setUsuarios(updatedUsers);
  }

  const handleEdit = (formData, index) => {
    setFormData({
      nome: formData.nome,
      email: formData.email,
      idade: formData.idade,
    })

    setEditIndex(index);
  }

  const handleDelete = (formData) => {
    const updatedUsers = deletarUsuario(formData.email);

    setUsuarios(updatedUsers);
  }

  return (
    <div className="App">
      <h3>Cadastro de Usuário</h3>

      <FormUsuario
        formData={formData}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <ListaUsuarios
        usuarios={usuarios}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Usuario;
