import React, { useState } from "react";
import "./add.css"; // CSS for styling
import { useNavigate } from "react-router-dom";

const baseurl ="https://backend-87yy.onrender.com"

function AddProject() {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    image: "",
    link: "",
  });

  const navigate = useNavigate()

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Use name and value to dynamically update state
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch(`${baseurl}/api/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData), // Send project data to the backend
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Project added:", data);

      // Clear the form after successful submission
      setProjectData({
        name: "",
        description: "",
        image: "",
        link: "",
      });

      navigate("/table")
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleNavigate =()=>{
   
  }

  return (
    <div className="add-project-container">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} className="add-project-form">
        <label>
          Project Name:
          <input
            type="text"
            name="name"
            value={projectData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={projectData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={projectData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Project Link:
          <input
            type="url"
            name="link"
            value={projectData.link}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Project</button>
      </form>

    </div>
  );
}

export default AddProject;
