import Filho from "./Filho"

const Pai = ({ familia }) => {
  return (
    <div>
      <Filho nome="Leandro" familia={familia} />
      <Filho nome="Muller" familia={familia} />
    </div>
  )
}

export default Pai
