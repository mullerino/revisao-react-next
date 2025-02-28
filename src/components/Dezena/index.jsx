const Dezena = ({ numero }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80px",
      width: "80px",
      backgroundColor: "#000",
      borderRadius: "100%",
      color: "#fff",
      fontSize: "32px"
    }}>
      {numero}
    </div>
  )
}

export default Dezena
