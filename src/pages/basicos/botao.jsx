const botao = ({ nome, familia }) => {
  const acao = () => {
    console.log("ação 1")
  }  

  return (
    <div>
      <button onClick={() => acao()}>Click here</button>
    </div>
  )
}

export default botao
