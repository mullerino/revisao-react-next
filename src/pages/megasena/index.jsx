import { useState } from "react"
import Dezena from "../../components/Dezena/index"
import styles from "../css/megasena.module.css"
import { gerarAposta } from "@/data/gerarAposta"

const megasena = () => {
  const minAposta = 6
  const maxAposta = 20

  const [aposta, setAposta] = useState([])
  const [quantidadeDezenas, setQuantidadeDezenas] = useState(minAposta)

  const gerarQuantidadeDezenas = (quantidade) => {
    if (quantidade < quantidadeDezenas) {
      setAposta(prevAposta => prevAposta.slice(0, -1))
    }

    setQuantidadeDezenas(quantidade)
  }

  const exibirAposta = () => {
    return aposta.length !== 0 ?
      aposta.map(dezena => {
        return (
          <Dezena key={dezena} number={dezena} />
        )
      }) :
      <span>Ainda não existe uma aposta :/</span>
  }

  const definirAposta = () => {
    const dezenasSorteadas = gerarAposta(quantidadeDezenas)

    setAposta(dezenasSorteadas)
  }

  return (
    <div className={styles.container}>
      <h2>Faça sua aposta na MEGA</h2>
      <label>Insira a quantidade de dezenas</label>
      <input
        type="number"
        min={minAposta}
        max={maxAposta}
        value={quantidadeDezenas}
        onChange={(e) => gerarQuantidadeDezenas(e.target.value)}
      />
      <div className={styles.row} >
        {exibirAposta()}
      </div>
      <div className={styles.apostar}>
        <button onClick={definirAposta}>Gerar aposta</button>
      </div>
    </div>
  )
}

export default megasena
