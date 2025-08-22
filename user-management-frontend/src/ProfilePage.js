import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

function ProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("ProfilePage useEffect tetiklendi!");

    const token = localStorage.getItem("token");
    console.log("ProfilePage Token:", token);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const email = decoded.sub;
        console.log("Decoded email:", email);

      axios.get(`http://localhost:9090/api/users/by-email?email=${email}`, {
        headers: {
          Authorization: token,

        },
      })

        .then((res) => {
          console.log("User Data:", res.data);
          setUserData(res.data);
        })
        .catch((err) => {
          console.error("Profil verisi alınamadı:", err);
        });

      } catch (e) {
        console.error("Token çözümleme hatası:", e);
      }
    }
  }, []);

  return (
    <div>
      <h2>Profil Sayfası</h2>
      {userData ? (
        <div>
          <p><strong>Ad:</strong> {userData.name}</p>
          <p><strong>E-posta:</strong> {userData.email}</p>
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
}

export default ProfilePage;
