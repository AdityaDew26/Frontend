import React, { useEffect, useState } from "react";
import "./table.css"; // Create CSS for styling
import { useNavigate } from "react-router-dom";

function ProjectTable() {
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch projects data from the backend
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleSelectChange = (id) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((projectId) => projectId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle delete of selected projects
  const handleDelete = async () => {
    try {
      for (const projectId of selectedProjects) {
        const response = await fetch(`http://localhost:5000/api/projects/${projectId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          console.log(`Project with ID ${projectId} deleted`);
        } else {
          console.error(`Failed to delete project with ID ${projectId}`);
        }
      }
      // Refresh the list after deletion
      setProjects(projects.filter((project) => !selectedProjects.includes(project._id)));
      setSelectedProjects([]); // Clear selected projects
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  // Handle delete for a single project
  const handleDeleteSingle = async (projectId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/projects/${projectId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`Project with ID ${projectId} deleted`);
        // Remove the deleted project from the list
        setProjects(projects.filter((project) => project._id !== projectId));
      } else {
        console.error(`Failed to delete project with ID ${projectId}`);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  // Navigate to the edit page with the selected project ID
  const handleEdit = (projectId) => {
    navigate(`/update/${projectId}`);
  };

  // Navigate to the add project page
  const handleAddNew = () => {
    navigate("/add");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="project-table-container">
      <h2>Project Table</h2>
      <table className="project-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProjects.includes(project._id)}
                  onChange={() => handleSelectChange(project._id)}
                />
              </td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </td>
              <td>
                <button onClick={() => handleEdit(project._id)}>Edit</button>
                <button onClick={() => handleDeleteSingle(project._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProjects.length > 0 && (
        <button onClick={handleDelete}>Delete Selected Projects</button>
      )}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleAddNew}>Add New Project</button>
    </div>
  );
}

export default ProjectTable;
