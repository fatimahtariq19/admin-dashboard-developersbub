// import { useState } from "react";
// import api from "../api/axios";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await api.post("/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);

//       window.location.href = "/dashboard";
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={styles.wrapper}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Admin Login</h2>

//         <input
//           style={styles.input}
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           style={styles.input}
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin} style={styles.button}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #0f172a, #1e293b)",
//   },

//   card: {
//     width: "350px",
//     padding: "30px",
//     borderRadius: "12px",
//     background: "#fff",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },

//   title: {
//     textAlign: "center",
//     marginBottom: "10px",
//     color: "#111",
//     fontSize: "22px",
//     fontWeight: "600",
//   },

//   input: {
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     outline: "none",
//     fontSize: "14px",
//   },

//   button: {
//     padding: "12px",
//     borderRadius: "8px",
//     border: "none",
//     background: "#000",
//     color: "#fff",
//     fontWeight: "600",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
// };


