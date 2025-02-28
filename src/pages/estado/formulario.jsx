import { useState } from "react"

const formulario = () => {
  const [valor, setValor] = useState("inicio")

  const alterarInput = (value) => {
    setValor(value)
  }
  return (
    <div>
      <input type="text" value={valor} onChange={(e) => alterarInput(e.target.value)}/>
    </div>
  )
}

// Ao associar o value com um estado estamos controlando o componente.

export default formulario
