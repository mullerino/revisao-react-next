import If from "@/components/If"

const condicional2 = (props) => {
  const numero = 3
  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1>Numero {numero} é par</h1>
      </If>
      <If teste={numero % 2 === 1}>
        <h1>Numero {numero} é impar</h1>
      </If>
    </div>
  )
}

export default condicional2
