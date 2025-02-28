import Row from "@/components/Row"
import styles from "../css/tabuleiro.module.css"

const tabuleiro = () => {
  return (
    <div className={styles.container}>
      <Row isBlackStart={true}/>
      <Row/>
      <Row isBlackStart={true}/>
      <Row/>
      <Row isBlackStart={true}/>
      <Row/>
      <Row isBlackStart={true}/>
      <Row/>
    </div>
  )
}

export default tabuleiro
