import Filho from "./Filho"

const Pai = () => {
  const falarComigo = (params) => {
    console.log('params')
  }
  return (
    <div>
      <Filho funcao={falarComigo}/>
    </div>
  )
}

export default Pai
