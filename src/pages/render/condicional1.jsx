import SomentePar from "@/components/SomentePar"

const condicional1 = () => {
  const numeros = [1,2,3,4,5,6]

  return (
    <div>
      {numeros.map(numero => {
        return (
          <SomentePar numero={numero}/>
        )
      })}
    </div>
  )
}

export default condicional1
