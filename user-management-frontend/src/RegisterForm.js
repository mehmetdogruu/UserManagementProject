import React, { useState } from 'react';

function RegisterForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9090/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.status === 201) {
        alert('Kayıt başarılı!');
        setForm({ name: '', email: '', password: '' });
      } else {
        const message = await response.text();
        alert(`Hata: ${message}`);
      }
    } catch (error) {
      alert('Sunucuya bağlanılamadı.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Kayıt Ol</h2>
      <input
        type="text"
        name="name"
        placeholder="Ad"
        value={form.name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="E-posta"
        value={form.email}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Şifre"
        value={form.password}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Kayıt Ol</button>
    </form>
  );
}

export default RegisterForm;
