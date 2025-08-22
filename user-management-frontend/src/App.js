import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import SecurePage from "./SecurePage";
import ProfilePage from "./ProfilePage";
import ProtectedRoute from "./ProtectedRoute";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // çıkışta güncelle
    window.location.href = "/login"; // yönlendir
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // ilk yüklemede token varsa true yap
  }, []);

  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Kayıt</Link>
          <Link to="/login" style={{ marginRight: '10px' }}>Giriş</Link>
          <Link to="/secure" style={{ marginRight: '10px' }}>Güvenli Sayfa</Link>
          <Link to="/profile" style={{ marginRight: '10px' }}>Profil</Link>

          {isLoggedIn && (
            <button onClick={handleLogout}>Çıkış</button>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/secure" element={
            <ProtectedRoute>
              <SecurePage />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
