import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: "flex" }}>

      {/* SIDEBAR */}
      {open && <Sidebar />}

      {/* MAIN AREA */}
      <div style={{ flex: 1 }}>

        {/* TOP NAVBAR */}
        <Navbar toggle={() => setOpen(!open)} />

        {/* PAGE CONTENT */}
        <div style={{ padding: "20px" }}>
          {children}
        </div>

      </div>
    </div>
  );
}