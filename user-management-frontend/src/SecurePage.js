import React, { useEffect, useState } from "react";
import axios from "axios";

function SecurePage() {
  const [secureData, setSecureData] = useState("");

 useEffect(() => {
   console.log("SecurePage useEffect tetiklendi!");

   const token = localStorage.getItem("token");
   console.log("SecurePage Token:", token);

   axios.get("http://localhost:9090/api/users/secure", {
     headers: {
       Authorization: token, // token zaten Bearer ile başlıyor
     },
   })


    .then((response) => {
      console.log("SecurePage response:", response.data);
      setSecureData(response.data);
    })
    .catch((error) => {
      console.error("Güvenli sayfa hatası:", error);
      setSecureData("Erişim reddedildi veya hata oluştu.");
    });
  }, []);

  return (
    <div>
      <h2>Güvenli Sayfa</h2>
      <p>{secureData}</p>
    </div>
  );
}

export default SecurePage;
