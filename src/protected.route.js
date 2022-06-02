import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import Layout from "./Components/Layout";

function ProtectedRoutes({component}) {
  const isLoggedIn = localStorage.getItem("access-token");
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } return <Layout>{component}</Layout>
}

export default ProtectedRoutes;
