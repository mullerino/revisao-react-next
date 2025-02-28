interface PessoaProps {
  nome: string,
  idade?: number
}

export const Pessoa = (props: PessoaProps) => {
  return (
    <div>
      <div>Nome: {props.nome}</div>
      <div>Idade: {props.idade ?? "Não informado"}</div>
    </div>
  )
}
