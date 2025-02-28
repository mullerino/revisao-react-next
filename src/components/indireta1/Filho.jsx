const Filho = (props) => {
  console.log(props.funcao)
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={() => props.funcao("Passei no enem")}>Falar com pai</button>
    </div>
  )
}

export default Filho
