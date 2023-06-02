import Home from "./components/pages/Home"
import Format from "../src/components/pages/Format"
import System from "../src/components/pages/System"
import Login from "./components/utils/Login"
import Register from "./components/utils/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PreOrder from "./components/pages/PreOrder"
import TimeCalendar from "./components/common/TimeCalendar"
import Admin from "./components/pages/Admin"
import Error from "./components/layout/Error"
import Header from "./components/layout/Header"
import Search from "./components/common/Search"
import ProtectedRouteWrapper from "./components/layout/ProtectedRoute"
import { useEffect,useState } from "react"
import login from "../src/apiAdmin"
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const loginAdmin = async () => {
      const loggedIn = await login("username", "password");
      setIsAdmin(loggedIn);
    };

    loginAdmin();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/format" element={<Format />} />
          <Route path="/system" element={<System />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/preorder/:id" element={<PreOrder />} />
          <Route path="/timecalendar" element={<TimeCalendar />} />
          <Route 
            path="/admin/*"
            element={<ProtectedRouteWrapper element={<Admin />} isAdmin={isAdmin} />}
        />
          <Route path="/error" element={<Error />} />
          <Route path="/header" element={<Header />} />
          <Route path="/search" element={<Search/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;