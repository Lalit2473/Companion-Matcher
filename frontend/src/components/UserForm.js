import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/api";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    interests: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const interestsArray = formData.interests.split(",").map((i) => i.trim());
    const user = {
      ...formData,
      age: parseInt(formData.age),
      interests: interestsArray,
    };
    await createUser(user);
    navigate(`/matches/${formData.name.toLowerCase()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
      <input name="interests" type="text" placeholder="Interests (comma-separated)" onChange={handleChange} required />
      <button type="submit">Find Matches</button>
    </form>
  );
};

export default UserForm;