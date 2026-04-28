import { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import api from "../api/axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <AdminLayout>
      <h1>Blogs</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        {blogs.map((b) => (
          <div
            key={b._id}
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>{b.title}</h3>
            <p>{b.description?.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}