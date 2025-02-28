const Repeticao1 = () => {
  const listaAprovados = ["João", "Maria", "Muller"]
  return (
    <ul>
      {
        listaAprovados.map((nome, i) => (
          <li key={i}>{nome}</li>
        ))
      }
    </ul>
  )
}

export default Repeticao1
