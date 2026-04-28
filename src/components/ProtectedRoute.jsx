import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // ❌ agar token nahi hai → login page pe bhej do
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // ✅ agar token hai → page allow
  return children;
}