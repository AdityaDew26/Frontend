import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from "./components/home/Home";
import Project from './components/pages/project/Project';
import AddProject from './components/pages/project/addProject/AddProject';
import ProjectTable from './components/pages/project/project-table/ProjectTable';
import UpdateProject from './components/pages/project/updateProject/Update';



const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/project' element={<Project/>}/> 
         <Route path='/add' element={<AddProject/>}/> 
          <Route path='/table' element={<ProjectTable/>}/> 
          <Route path='/update' element={<UpdateProject/>}/> 
      </Routes>
    </Router>
  );
};

export default App;