# 📌 User Management Project

A full-stack web application for managing users — including registration, login, profile display, and JWT-based authentication.

---

## 🚀 Proje Özeti

Bu proje, kullanıcı yönetimi için geliştirilmiş bir **Full Stack** uygulamadır. Kullanıcılar sisteme kayıt olabilir, giriş yapabilir ve JWT (JSON Web Token) tabanlı güvenli bir şekilde oturum açabilir. Proje aynı zamanda kullanıcı profili bilgilerini görüntülemeyi destekler.

---

## 🛠️ Kullanılan Teknolojiler

### ✅ Backend (Spring Boot)
- **Java 17** ile yazılmıştır
- **Spring Boot** ile yapılandırılmış RESTful API
- **Spring Security** ile JWT Authentication
- **MySQL** veritabanı bağlantısı
- **JPA (Hibernate)** ile veri erişimi
- **Model-DTO-Mapper** yapısıyla katmanlı mimari

### ✅ Frontend (React)
- **React.js 19.x**
- **React Router v6** ile yönlendirme
- **Axios** ile API istekleri
- **JWT Decode** ile kullanıcı bilgisi çözümleme
- (Opsiyonel: Tailwind CSS kullanımı planlandı ancak iptal edildi)

---

## 🔐 Authentication Sistemi

- Kullanıcılar `/api/users/register` üzerinden kayıt olur.
- `/api/users/login` ile giriş yapılır.
- Başarılı girişte alınan JWT, frontend tarafında `localStorage`’a kaydedilir.
- Axios Interceptor sayesinde tüm isteklerde otomatik olarak `Authorization: Bearer <token>` başlığı eklenir.

---

## 🗃️ Veritabanı

- Kullanıcılar `users` tablosunda saklanır.
- Şifreler BCrypt algoritmasıyla **hash**’lenir.
- Gerekli kullanıcı rolleri/otoriteleri için genişletilebilir yapı desteklenir.

---

## 🖥️ Kurulum

### Backend için:
```bash
cd user-management-backend
./mvnw spring-boot:run
```

### Frontend için:
```bash
cd user-management-frontend
npm install
npm start
```

> Frontend `http://localhost:3000`, Backend ise `http://localhost:8080` adresinde çalışır.

---

## 🧑‍💻 Geliştirici

- 💼 İsim: Mehmet Doğru
- 🌍 Lokasyon: İzmir, Türkiye
- 💬 İletişim: [GitHub](https://github.com/mehmetdogruu)
