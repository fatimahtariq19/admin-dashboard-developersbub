import { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import api from "../api/axios";

export default function Inquiries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const res = await api.get("/inquiries");
      setData(res.data.data || res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <h1 style={{ marginBottom: "20px" }}>Contact Inquiries</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}
          >
            <thead>
              <tr style={{ background: "#000", color: "#fff" }}>
                <th style={th}>Name</th>
                <th style={th}>Email</th>
                <th style={th}>Phone</th>
                <th style={th}>Company</th>
                <th style={th}>Message</th>
                <th style={th}>Date</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item._id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={td}>{item.name}</td>
                  <td style={td}>{item.email}</td>
                  <td style={td}>{item.phone}</td>
                  <td style={td}>{item.company}</td>
                  <td style={td}>{item.message}</td>
                  <td style={td}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}

// styles
const th = {
  padding: "12px",
  textAlign: "left",
  fontSize: "14px"
};

const td = {
  padding: "12px",
  fontSize: "14px",
  verticalAlign: "top"
};
