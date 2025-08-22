import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function LoginForm({ setIsLoggedIn }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post("http://localhost:9090/api/users/login", {
         email,
         password,
       });

       const token = response.data;
       localStorage.setItem("token", token);
       setMessage("Giriş başarılı!");
       setIsLoggedIn(true); // Giriş yapıldığında güncelle
       navigate("/secure");
     } catch (error) {
       console.error("Giriş hatası:", error);
       setMessage("Giriş başarısız: " + error.response?.data || error.message);
     }
   };
  return (
    <div>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Giriş Yap</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LoginForm;
