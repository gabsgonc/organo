import './DropList.css' 

const DropList = (props) => {
  return (
    <div className='drop-list'>
      <label>{props.label}</label>
      <select onChange={event => props.aoAlterado(event.target.value)} required={props.obrigatorio} value={props.valor}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
};

export default DropList;