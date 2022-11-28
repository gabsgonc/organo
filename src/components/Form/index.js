import { useState } from 'react';

import './Form.css';
import TextArea from '../TextArea';
import DropList from '../DropList';
import Buttom from '../Buttom';

const Form = (props) => {

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = (event) => {
    event.preventDefault();
    props.registeredCollaborator({
      name,
      position,
      image,
      team
    })
    setName('')
    setPosition('')
    setImage('')
    setTeam('')
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextArea 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite o seu nome"
          valor={name}
          aoAlterado={valor => setName(valor)}
        />
        <TextArea 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite o seu cargo"
          valor={position}
          aoAlterado={valor => setPosition(valor)}
        />
        <TextArea 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          valor={image}
          aoAlterado={valor => setImage(valor)}
        />
        <DropList 
          obrigatorio={true} 
          label="Time"
          itens={props.teamName}
          valor={team}
          aoAlterado={valor => setTeam(valor)}
        />
        <Buttom>
          Criar Card
        </Buttom>
      </form>
    </section>
  )
};

export default Form;