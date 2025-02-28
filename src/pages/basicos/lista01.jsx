/*
Gerar a seguinte estrutura: 
<div>
  <span>1,</span>
  <span>2,</span>
  <span>n...</span>
</div>
*/

const createArrayNumbers = (minNumber, maxNumber) => {
  const arrayNumbers = []

  for (let i = minNumber; i <= maxNumber; i++) {
    arrayNumbers.push(i)
  }

  return arrayNumbers

}

const numbers = () => {
  const arrayNumbers = createArrayNumbers(3, 12)

  return (
    <div>
      {
        arrayNumbers.map((number, i) => {
          return (
            <span key={i}>{number} </span>
          )
        })
      }
    </div>
  )
}

export default numbers
