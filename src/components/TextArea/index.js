import'./TextArea.css'

const TextArea = (props) => {

  const placeholderModificada = `${props.placeholder}...`

  // let valor = 'Guilherme';

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value)
  };

  return (
    <div className="area-text">
      <label>
        {props.label}
      </label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
    </div>
  )
};

export default TextArea;