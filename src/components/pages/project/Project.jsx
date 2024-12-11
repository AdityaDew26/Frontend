import React, { useEffect, useState } from "react";
import "./project.css";
import { useNavigate } from "react-router-dom";
const baseurl ="https://backend-87yy.onrender.com"

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const move = useNavigate();

  // Fetch data from the backend
  useEffect(() => {
    // Fetching real data from the backend
    fetch(`${baseurl}/api/projects`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  const HanldleMove = () => {
    move("/table");
  };

  // Dummy project data (will be used if fetch fails or no data is returned)
  const dummyProjects = [
    {
      _id: "1",
      name: "Project One",
      description: "This is a sample project description for Project One.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XB7WQ4D1nqpHT1o_mLHMTj7a1TnqHKn4zA&s",
      link: "https://example.com/project-one",
    },
    {
      _id: "2",
      name: "Project Two",
      description: "This is a sample project description for Project Two.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHpYJnE9r8SWawmf9q5sutOp_jF_yJiDM2g&s",
      link: "https://example.com/project-two",
    },
    {
      _id: "3",
      name: "Project Three",
      description: "This is a sample project description for Project Three.",
      image: "https://www-cms.pipedriveassets.com/Embedding-Images-in-Emails.png",
      link: "https://example.com/project-three",
    },
      {
      _id: "4",
      name: "Project Four",
      description: "This is a sample project description for Project Three.",
      image: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg",
      link: "https://example.com/project-four",
    }
  ];

  
  const displayProjects = projects.length > 0 ? projects : dummyProjects;

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <div className="project-container" id="project">
      <h2>Project Showcase</h2>
      <div className="project-grid">
        {displayProjects.map((project) => (
          <div key={project._id} className="project-card">
            <img
              src={project.image || "https://via.placeholder.com/300x200"}
              alt={project.name}
              className="project-image"
            />
            <div className="project-details">
              <h3 className="project-name" >{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
   
      </div>
           <button onClick={HanldleMove}>Show All Projects</button>
      
    </div>
  );
}

export default Project;
