import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./update.css"


function UpdateProject() {
  const { id } = useParams(); // Get the project ID from URL
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    image: "",
    link: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the project data to pre-fill the form
    fetch(`http://localhost:5000/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error("Failed to update project");
      }

      const updatedProject = await response.json();
      console.log("Project updated:", updatedProject);
      navigate("/"); // Navigate back to project table after update
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <div>
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default UpdateProject;
