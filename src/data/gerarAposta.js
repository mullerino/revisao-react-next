export const gerarAposta = (quantidadeDezenas) => {
  const dezenas = new Set()

  while (dezenas.size < quantidadeDezenas) {
    dezenas.add(Math.round(Math.random() * 60) + 1)
  }

  return [...dezenas].sort((a, b) => a - b)
}
