import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"

function ProtectedRoutes({children}) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  console.log(isLoggedIn)
  if (isLoggedIn) {
    return <Navigate to="/login" />;
  } return children;
}

export default ProtectedRoutes;
