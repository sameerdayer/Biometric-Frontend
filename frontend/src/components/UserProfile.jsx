import React, { useState } from "react";

const UserProfile = () => {
  const [username, setUsername] = useState("CurrentUsername");
  const [password, setPassword] = useState("");

  const handleUsernameChange = () => {
    // Logic to handle username change
    alert(`Username changed to: ${username}`);
  };

  const handlePasswordChange = () => {
    // Logic to handle password change
    alert("Password changed successfully!");
  };

  const handleAddUser = () => {
    // Logic to add a new user
    alert("New user added!");
  };

  const handleDeleteUser = () => {
    // Logic to delete a user
    alert("User deleted!");
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-field">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleUsernameChange}>Change Username</button>
      </div>

      <div className="profile-field">
        <label>New Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handlePasswordChange}>Change Password</button>
      </div>

      <div className="profile-actions">
        <button onClick={handleAddUser}>Add New User</button>
        <button onClick={handleDeleteUser}>Delete User</button>
      </div>
    </div>
  );
};

export default UserProfile;
