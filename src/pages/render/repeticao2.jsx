const Repeticao1 = () => {
  const produtos = [
    { id: 1, produto: "Celular", preco: 1000 },
    { id: 2, produto: "Carro", preco: 15000 },
  ]

  const renderizarProdutos = () => {
    return produtos.map(produto => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.produto}</td>
          <td>{produto.preco}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            renderizarProdutos()
          }
        </tbody>
      </table>
    </div>
  )
}

export default Repeticao1
