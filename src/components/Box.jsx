import styles from "../pages/css/box.module.css"

const Box = ({ isBlack }) => {
  return (
    <div className={styles.box} style={{backgroundColor: isBlack ? "#000" : "#fff"}}>
    </div>
  )
}

export default Box
