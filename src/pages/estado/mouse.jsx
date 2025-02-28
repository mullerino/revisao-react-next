import { useState } from "react"

const mouse = () => {
  const [ eixos, setEixos ] = useState({x: 0, y: 0})

  const quandoMover = (event) => {
    setEixos({
      x: event.clientX,
      y: event.clientY
    })
  }

  return (
    <div style={{ 
      backgroundColor: "#222",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center", 
      color: "#fff",
      height: "100vh",
      fontSize: "18px"
    }} onMouseMove={(e) => quandoMover(e)}>
      <span>Eixo x: {eixos.x}</span>
      <span>Eixo y: {eixos.y}</span>
    </div>
  )
}

export default mouse
