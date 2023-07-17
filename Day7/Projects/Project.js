import React, { useState } from 'react';
import './Pro.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
const Project = () => {
  const [teamId, setTeamId] = useState('');
  const [projectId, setProjectId] = useState('');

  const handleTeamChange = (e) => {
    setTeamId(e.target.value);
  };

  const handleProjectChange = (e) => {
    setProjectId(e.target.value);
  };

  const assignProjectToTeam = () => {
    setTeamId('');
    setProjectId('');
  };

  return (
    <div>
    <Navbar />
    <div className='container-pro'>
      <h2 className='h2pro'>Assign Project to Team</h2>
      <div>
        <label htmlFor="team">Team:</label><br></br>
        <select className='selectpro' id="team" value={teamId} onChange={handleTeamChange}>
          <option value="">Select Team</option>
          <option value="1">Team 1</option>
          <option value="2">Team 2</option>
          <option value="3">Team 3</option>
          
        </select>
      </div>
      <div>
        <label className='labelpro' htmlFor="project">Project:</label>
        <select className='selectpro' id="project" value={projectId} onChange={handleProjectChange}>
          <option value="">Select Project</option>
          <option value="1">Project A</option>
          <option value="2">Project B</option>
          <option value="3">Project C</option>
          
        </select>
      </div>
      <div>
        <label className='labelpro' htmlFor="project">Team Manager:</label>
        <select className='selectpro' id="project" value={projectId} onChange={handleProjectChange}>
          <option value="">Select Manager</option>
          <option value="1">Manager A</option>
          <option value="2">Manager B</option>
          <option value="3">Manager C</option>
          
        </select>
      </div>
      <button className='btpro' onClick={assignProjectToTeam}>Assign Project to Team</button>
    </div>
    <Footer/>
    </div>
  );
};

export default Project;
