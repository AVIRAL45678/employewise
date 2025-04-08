import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

import Navbar from './Navbar';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await api.get(`/users/${id}`);
      const { first_name, last_name, email } = res.data.data;
      setFormData({ first_name, last_name, email });
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/users/${id}`, formData);
    alert('User updated!');
    navigate('/users');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required />
          <input value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} required />
          <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default EditUser;