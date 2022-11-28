import './Buttom.css';

const Buttom = (props) => {
  return ( <button className='button'>
    {props.children}
  </button>)
};

export default Buttom;