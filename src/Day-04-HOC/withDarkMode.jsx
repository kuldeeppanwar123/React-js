
const withDarkMode = (Component) => {
  const styles = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
  }
  return (props) => {
    return(
      <div style={styles}>
       <Component {...props}/>
      </div>
    );
  }
}

export default withDarkMode;