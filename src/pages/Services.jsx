import { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import api from "../api/axios";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get("/services").then((res) => {
      setServices(res.data);
    });
  }, []);

  return (
    <AdminLayout>
      <h1>Services</h1>

      <div style={{ display: "grid", gap: "15px" }}>
        {services.map((s) => (
          <div
            key={s._id}
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>{s.title || s.name}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}