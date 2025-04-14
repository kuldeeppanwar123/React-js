import withAuth from "./withAuth";
import withDarkMode from "./withDarkMode";

function Dashboard ({name}) {
  return (
    <>
    Dashboard Page
    <div>name: {name}</div>
    </>
  )
}
const AuthDash = withAuth(Dashboard);
export default AuthDash;