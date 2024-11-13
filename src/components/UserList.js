import React, { useState, useEffect } from 'react';
import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User Directory</h1>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
