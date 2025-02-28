const SomentePar = ({ numero }) => {
  const isNumeroPar = numero % 2 === 0

  return (
    <div>
      {
        isNumeroPar ? 
          <span>{numero}</span> :
          null
      }
    </div>
  )
}

export default SomentePar
