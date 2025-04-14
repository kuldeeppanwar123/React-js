
const withAuth = (Component) => {
  const isAuthenticated = true;
  return function (props) {
    console.log({props})
    return(
      <>
      <div>HOC</div>
      {isAuthenticated ? <Component {...props} /> :  <p>Please login to Access</p>}
      </>
    );
  };
}

export default withAuth;