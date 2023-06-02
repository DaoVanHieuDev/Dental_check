    
  import { Route, Navigate } from "react-router-dom";

  function ProtectedRoute({ path, element: Component, isAdmin }) {
    return isAdmin ? (
      <Route path={path} element={Component} />
    ) : (
      <Navigate to="/user" replace={true} />
    );
  }
  
  export default function ProtectedRouteWrapper({ path, element, isAdmin }) {
    return <ProtectedRoute path={path} element={element} isAdmin={isAdmin} />;
  }