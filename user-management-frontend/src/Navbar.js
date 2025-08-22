import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Kayıt
      </Link>
      <Link to="/login" style={{ marginRight: "10px" }}>
        Giriş
      </Link>
      <Link to="/secure" style={{ marginRight: "10px" }}>
        Güvenli Sayfa
      </Link>
      <button onClick={handleLogout}>Çıkış</button>
    </nav>
  );
}

export default Navbar;
