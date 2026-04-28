import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import ProtectedRoute from "./components/ProtectedRoute";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Inquiries from "./pages/Inquiries";
import CreatePortfolio from "./pages/CreatePortfolio";
import Warningpage from "./pages/Warningpage"
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        {/* <Route path="/" element={<Login />} /> */}

        {/* PROTECTED */}
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <Dashboard />
            // </ProtectedRoute>
          }
        />

        <Route
          path="/portfolio"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />

        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <Services />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/inquiries"
          element={
            <ProtectedRoute>
              <Inquiries />
            </ProtectedRoute>
          }
        />

        <Route
          path="/createportfolio"
          element={
            <ProtectedRoute>
              <CreatePortfolio />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Warningpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/warningmessage"
          element={
            <ProtectedRoute>
              <Warningpage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;