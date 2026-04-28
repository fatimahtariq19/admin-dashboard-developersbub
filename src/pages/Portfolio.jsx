import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import api from "../api/axios";

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
const BASE_URL = "http://localhost:5000";
  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    const res = await api.get("/portfolio");
    setData(res.data.data || res.data);
  };

  return (
    <AdminLayout>
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <h1>Portfolio</h1>

        <button
          onClick={() => navigate("/createportfolio")}
          style={{
            padding: "10px 15px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          + Create
        </button>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px"
        }}
      >
        {data.map((item) => (
          <div
            key={item._id}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
          >
         <img
  src={
    item.image?.startsWith("http")
      ? item.image // ✅ external URL
      : `${BASE_URL}/${item.image}` // ✅ local upload
  }
  alt={item.name}
  style={{
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px"
  }}
/>

            <h3>{item.name}</h3>
            <p>{item.category?.name}</p>

            {/* Actions */}
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                onClick={() =>
                  navigate(`/admin/portfolio/edit/${item._id}`)
                }
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setDeleteId(item._id);
                  setShowModal(true);
                }}
                style={{ color: "red" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MODAL (IMPORTANT: inside return) */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center"
            }}
          >
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this item?</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px"
              }}
            >
              <button
                onClick={() => {
                  setShowModal(false);
                  setDeleteId(null);
                }}
              >
                Cancel
              </button>

              <button
                onClick={async () => {
                  await api.delete(`/portfolio/${deleteId}`);
                  setShowModal(false);
                  setDeleteId(null);
                  fetchPortfolio();
                }}
                style={{ color: "red" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}