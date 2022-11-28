import './Collaborator.css';

const Collaborator = ({ name, image, position, color }) => {
  return (
    <div className='collaborator'>
      <div className='cabecalho' style={{ backgroundColor: color }}>
        <img src={image} alt={name} />
      </div>
      <div className='rodape'>
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Collaborator