import { useState } from "react"

const contador = () => {
  let [count, setCount] = useState(0)

  const incrementCount = () => {
    const newCount = count + 1
    setCount(newCount)
  }

  const deincrementCount = () => {
    const newCount = count - 1
    setCount(newCount)
  }


  return (
    <div>
      <h1>Contador</h1>
      <div>Valor: {count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={deincrementCount}>-</button>
    </div>
  )
}

export default contador
