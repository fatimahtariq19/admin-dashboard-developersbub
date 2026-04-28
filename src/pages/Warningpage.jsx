import { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import api from "../api/axios";

export default function Warningpage() {
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchWarnings();
  }, []);

  const fetchWarnings = async () => {
    const res = await api.get("/warningmessage/all");
    setData(res.data.data || res.data);
  };

  return (
    <AdminLayout>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Warning Messages</h1>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {data.map((item) => (
          <div
            key={item._id}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{item.name}</h3>
            <p style={{ color: "gray" }}>{item.email}</p>

            <p
              style={{
                marginTop: "10px",
                background: "#f5f5f5",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              {item.message}
            </p>

            <small style={{ color: "#888" }}>
              {new Date(item.createdAt).toLocaleDateString()}
            </small>

            {/* ACTIONS */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <button
                onClick={() => {
                  setDeleteId(item._id);
                  setShowModal(true);
                }}
                style={{
                  color: "red",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
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
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h3>Delete Message</h3>
            <p>Are you sure?</p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
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
                  await api.delete(`/warningmessage/${deleteId}`);
                  setShowModal(false);
                  setDeleteId(null);
                  fetchWarnings();
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