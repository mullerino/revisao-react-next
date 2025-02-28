import styles from "../pages/css/row.module.css"
import Box from "./box"

const Row = ({ isBlackStart }) => {
  return (
    <div className={styles.container}>
      <Box isBlack={isBlackStart}/>
      <Box isBlack={!isBlackStart}/>
      <Box isBlack={isBlackStart}/>
      <Box isBlack={!isBlackStart}/>
      <Box isBlack={isBlackStart}/>
      <Box isBlack={!isBlackStart}/>
      <Box isBlack={isBlackStart}/>
      <Box isBlack={!isBlackStart}/>
    </div>
  )
}

export default Row
