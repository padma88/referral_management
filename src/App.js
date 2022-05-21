import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoudary";

import Layout from "./Components/Layout";
import Login from "./Components/LoginAndSignup/Login";
import Signup from "./Components/LoginAndSignup/Signup";
import Dashboard from "./Components/Dashboard";
import List from "./Components/Users/List";

import ProtectedRoutes from "./protected.route";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoutes>
              <Layout>
                <List />
              </Layout>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
