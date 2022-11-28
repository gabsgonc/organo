import Collaborator from '../Collaborator';
import './Team.css'

const Team = (props) => {
  const css = { backgroundColor: props.secondColor }

  return (
    (props.collaborators.length > 0) ? <section className='team' style={css}>
      <h3 style={{ borderColor: props.primaryColor}}>{props.nome}</h3>
      <div className="collaborators">
        {props.collaborators.map( collaborator => 
          <Collaborator 
            color={props.primaryColor}
            key={collaborator.name}
            name={collaborator.name} 
            position={collaborator.position} 
            image={collaborator.image} 
          />
        )}
      </div>
    </section> : ''
  );
};

export default Team