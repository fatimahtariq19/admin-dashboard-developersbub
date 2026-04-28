import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import api from "../api/axios";

export default function Dashboard() {
  const [counts, setCounts] = useState({
    portfolio: 0,
    services: 0,
    blogs: 0,
    inquiries: 0,
    warnings: 0, // ✅ NEW
  });

  const navigate = useNavigate();

  const fetchCounts = async () => {
    try {
      const [portfolioRes, servicesRes, blogsRes, inquiriesRes, warningsRes] =
        await Promise.all([
          api.get("/portfolio"),
          api.get("/services"),
          api.get("/blogs"),
          api.get("/inquiries"),
          api.get("/warningmessage/all"), // ✅ NEW API
        ]);

      setCounts({
        portfolio: getLength(portfolioRes),
        services: getLength(servicesRes),
        blogs: getLength(blogsRes),
        inquiries: getLength(inquiriesRes),
        warnings: getLength(warningsRes), // ✅ NEW
      });
    } catch (error) {
      console.log("Dashboard API error:", error);
    }
  };

  const getLength = (res) => {
    return (
      res.data?.length ||
      res.data?.data?.length ||
      res.data?.result?.length ||
      0
    );
  };

  useEffect(() => {
    fetchCounts();

    const interval = setInterval(() => {
      fetchCounts();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AdminLayout>
      <h1>Dashboard Home</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <Card title="Portfolio" value={counts.portfolio} link="/portfolio" />
        <Card title="Services" value={counts.services} link="/services" />
        <Card title="Blogs" value={counts.blogs} link="/blogs" />
        <Card title="Inquiries" value={counts.inquiries} link="/inquiries" />

        {/* ✅ WARNING CARD ADDED */}
        <Card
          title="Warnings"
          value={counts.warnings}
          link="/warningmessage"
        />
      </div>
    </AdminLayout>
  );
}

// CARD COMPONENT
function Card({ title, value, link }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      style={{
        background: "#000",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "150px",
        cursor: "pointer",
        transition: "0.3s",
        textAlign: "center",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}