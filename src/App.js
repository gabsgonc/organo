import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondColor: '#FAE9FF',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF',
    },
  ];

  const [collaborators, setCollaborators] =useState([]);

  const newCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  };

  return (
    <div className="App">
      <Banner />
      <Form 
        teamName={teams.map(team => team.name)} 
        registeredCollaborator={collaborator => newCollaborator(collaborator)}
      />
      
      {teams.map(team => 
        <Team 
          key={team.name} 
          nome={team.name} 
          primaryColor={team.primaryColor} 
          secondColor={team.secondColor}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />)}

        <Footer />
     
    </div>
  );
}

export default App;
