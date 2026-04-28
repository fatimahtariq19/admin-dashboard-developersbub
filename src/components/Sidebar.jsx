import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1e1e2f",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Admin</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard" style={link}>Dashboard</Link></li>
        <li><Link to="/portfolio" style={link}>Portfolio</Link></li>
        <li><Link to="/services" style={link}>Services</Link></li>
        <li><Link to="/blogs" style={link}>Blogs</Link></li>
        <li><Link to="/inquiries" style={link}>Inquiries</Link></li>
      </ul>
    </div>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  display: "block",
  padding: "10px 0",
};