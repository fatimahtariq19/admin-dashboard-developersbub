// import { useNavigate } from "react-router-dom";

export default function Navbar({ toggle }) {
  // const navigate = useNavigate();

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };

  return (
    <div
      style={{
        height: "60px",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {/* LEFT */}
      <button onClick={toggle} style={{ cursor: "pointer" }}>
        ☰
      </button>

      {/* RIGHT */}
      <div style={{ display: "flex", gap: "10px" }}>
        <span>Admin</span>

        {/* <button onClick={logout} style={{ background: "red", color: "white" }}>
          Logout
        </button> */}
      </div>
    </div>
  );
}