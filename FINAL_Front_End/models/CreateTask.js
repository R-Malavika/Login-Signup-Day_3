import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
const CreateTaskPopup = ({ modal, toggle, save }) => {
  
  const [description, setDescription] = useState('');
  const [assignedto, setAssignedto] = useState('');
  const [projectId, setProjectId] = useState(0);
const[projectName,setProjectName]=useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;

     if (name === 'description') {
      setDescription(value);
    } else if (name === 'assignedto') {
      setAssignedto(value);
    }
    else if(name==='projectId'){
      setProjectId(value);
    }
    else if(name==='projectName'){
      setProjectName(value);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
  
    let taskObj = {
      description: description,
      assignedto: assignedto,
      projectid: +projectId,
      projectname:projectName
    };
  
     save(taskObj);
    const token = localStorage.getItem('token');
  
   await axios.post('http://localhost:8181/api/pro/task', taskObj, {
      headers: {
        "Authorization": `Bearer ${token}`, 
      },
    })
      .then((response) => {
        
        console.log('Task created successfully:', response.data);
       
        toggle();
      })
      .catch((error) => {
       
        console.error('Error creating task:', error);
      });
   
  };
  

  return (
    <Modal isOpen={modal} toggle={toggle} >
     
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            value={projectName}
            onChange={handleChange}
            name="projectName"
          />
        </div>
        <label>Assign To</label>
        <input
          type="text"
          className="form-control"
          value={assignedto}
          onChange={handleChange}
          name="assignedto"
        />
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
      
         
          <div className="form-group">
          <label>Project Id</label>
          <input
            type="number"
            className="form-control"
            value={projectId}
            onChange={handleChange}
            name="projectId"
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
      
    </Modal>
  );
};

export default CreateTaskPopup;






































// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const CreateTaskPopup = ({modal, toggle, save}) => {
//     const [taskName, setTaskName] = useState('');
//     const [assign, setAssign] = useState('');
//     const [description, setDescription] = useState('');

//     const handleChange = (e) => {
        
//         const {name, value} = e.target

//         if(name === "taskName"){
//             setTaskName(value)
//         }
//         else if(name==="assign")
//         {
//             setAssign(value)
//         }
//         else{
//             setDescription(value)
//         }


//     }

//     const handleSave = (e) => {
//         e.preventDefault()
//         let taskObj = {}
//         taskObj["Name"] = taskName
//         taskObj["Assign"] = assign
//         taskObj["Description"] = description
//         save(taskObj)

//     }

//     return (
//         <Modal isOpen={modal} toggle={toggle}>
//             <ModalHeader toggle={toggle}>Create Task</ModalHeader>
//             <ModalBody>
            
//                     <div className = "form-group">
//                         <label>Task Name</label>
//                         <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
//                     </div>
//                     <div className = "form-group">
//                         <label>Assign to</label>
//                         <input type="text" className = "form-control" value = {assign} onChange = {handleChange} name = "assign"/>
//                     </div>
                    
//                     <div className = "form-group">
//                         <label>Description</label>
//                         <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
//                     </div>
                
//             </ModalBody>
//             <ModalFooter>
//             <Button color="primary" onClick={handleSave}>Create</Button>{' '}
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//             </ModalFooter>
//       </Modal>
//     );
// };

// export default CreateTaskPopup;