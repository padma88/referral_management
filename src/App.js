import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoudary";

import Login from "./Components/LoginAndSignup/Login";
import Signup from "./Components/LoginAndSignup/Signup";
import Dashboard from "./Components/Dashboard";
import List from "./Components/Users/List";
import EditView from "./Components/Users/EditView";

import ProtectedRoutes from "./protected.route";
import Layout from "./Components/Layout";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={<ProtectedRoutes component={<Dashboard />} />}
        />
        <Route path="/users">
          <Route path="" element={<ProtectedRoutes component={<List />} />} />
          <Route
            path=":id"
            element={<ProtectedRoutes component={<EditView />} />}
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
