import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../index.css";

export default function CreatePortfolio() {
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    name: "",
    url: "",
    category: "",
    image: "", // ✅ URL string
  });

  const navigate = useNavigate();

  // FETCH CATEGORIES
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: form.name,
        url: form.url,
        category: form.category,
        image: form.image, // ✅ IMAGE URL
      };

      await api.post("/portfolio/create-portfolio", payload);

      alert("Portfolio Created Successfully 🚀");

      // RESET FORM
      setForm({
        name: "",
        url: "",
        category: "",
        image: "",
      });

      navigate("/portfolio");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Error creating portfolio");
    }
  };

  return (
    <div className="cp-wrapper">
      <div className="cp-card">
        <h1 className="cp-title">Create Portfolio</h1>

        <form onSubmit={handleSubmit} className="cp-form">
          {/* NAME */}
          <input
            className="cp-input"
            name="name"
            placeholder="Project Name"
            value={form.name}
            onChange={handleChange}
          />

          {/* URL */}
          <input
            className="cp-input"
            name="url"
            placeholder="Project URL"
            value={form.url}
            onChange={handleChange}
          />

          {/* IMAGE URL */}
          <input
            className="cp-input"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          {/* CATEGORY */}
          <select
            className="cp-input"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>

            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* BUTTON */}
          <button type="submit" className="cp-btn">
            Create Portfolio
          </button>
        </form>
      </div>
    </div>
  );
}
