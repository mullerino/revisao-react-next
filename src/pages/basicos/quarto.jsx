function quarto() {
  const subtitulo = "Estou no js"
  return (
    <div>
      <h1>
        Integração JS e JSX
      </h1>
      <h2>{entre(3, 2, 4)}</h2>
    </div>
  )
}

function entre(valor, min, max) {
  if(valor >= min && valor <= max) {
    return "sim"
  } else {
    return "não"
  }
}

export default quarto
