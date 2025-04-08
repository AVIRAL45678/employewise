import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

import Navbar from './Navbar';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    const res = await api.get(`/users?page=${page}`);
    setUsers(res.data.data);
    setTotalPages(res.data.total_pages);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>User List</h2>
        <div className="grid">
          {users.map(user => (
            <div key={user.id} className="card">
              <img src={user.avatar} alt="avatar" />
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
              <Link to={`/edit/${user.id}`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
          <span>Page {page}</span>
          <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default UserList;