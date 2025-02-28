const If = (props) => {
  return (
    <div>
      { props.teste ? props.children : null}
    </div>
  )
}

export default If
