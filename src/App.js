import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoudary";

import Login from "./Pages/LoginAndSignup/Login";
import Signup from "./Pages/LoginAndSignup/Signup";
import Dashboard from "./Pages/Dashboard";
import List from "./Pages/Users/List";
import EditView from "./Pages/Users/EditView";
import CreateUser from "./Pages/Users/CreateUser";

import ProtectedRoutes from "./protected.route";
import Layout from "./Pages/Layout";

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
          <Route path="create" element={<ProtectedRoutes component={<CreateUser />} />} />
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
