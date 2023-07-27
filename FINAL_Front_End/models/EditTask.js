import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const[projectName,setProjectName]=useState('');
  const [description, setDescription] = useState('');
  const [taskAssign, setTaskAssign] = useState('');
  const [projectId, setProjectId] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'description') {
      setDescription(value);
    } else if (name === 'taskAssign') {
      setTaskAssign(value);
    }
    else if(name==='projectId'){
      setProjectId(value);
    }
    else if(name==='projectName'){
      setProjectName(value);
    }
  };
  
  useEffect(() => {
    setProjectName(taskObj.projectname);
    setDescription(taskObj.description);
    setTaskAssign(taskObj.assignedto);
    //setTaskAssign(taskObj.projectid);
  }, []);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj['projectname'] = projectName;
    tempObj['description'] = description;
    tempObj['assignedto'] = taskAssign;
    tempObj['projectid'] = projectId;
    updateTask(tempObj);
  };
  
  return (
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
        <div className="form-group">
        <label>Assign To</label>
        <input
        type="text"
        className="form-control"
        value={taskAssign}
        onChange={handleChange}
        name="taskAssign"
        />
        </div>
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
        
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
        Update
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
        Cancel
        </Button>
        </ModalFooter>
        </Modal>
        );
      };
      
      export default EditTask












      // const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
      //   const [description, setDescription] = useState('');
      //   const [assignedto, setAssignedto] = useState('');
      //   const [projectId, setProjectId] = useState(0);
      // const[projectName,setProjectName]=useState('');
      //   const handleChange = (e) => {
      //     const { name, value } = e.target;
      
      //      if (name === 'description') {
      //       setDescription(value);
      //     } else if (name === 'assignedto') {
      //       setAssignedto(value);
      //     }
      //     else if(name==='projectId'){
      //       setProjectId(value);
      //     }
      //     else if(name==='projectName'){
      //       setProjectName(value);
      //     }
      //   };
      
      //   useEffect(() => {
      //     setProjectName(taskObj.projectName);
      //     setDescription(taskObj.description);
      //     setAssignedto(taskObj.assignedto);
      //     //setTaskAssign(taskObj.projectid);
      //   }, []);
      
      //   const handleUpdate = (e) => {
      //     e.preventDefault();
      //     let tempObj = {};
      //     tempObj['projectname'] = projectName;
      //     tempObj['description'] = description;
      //     tempObj['assignedto'] = assignedto;
      //     tempObj['projectid'] = projectId;
      //     updateTask(tempObj);
      //   };
      
      //   return (
      //     <Modal isOpen={modal} toggle={toggle}>
      //       <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      //       <ModalBody>
      //         <div className="form-group">
      //           <label>Task Name</label>
      //           <input
      //             type="text"
      //             className="form-control"
      //             value={projectName}
      //             onChange={handleChange}
      //             name="taskName"
      //           />
      //         </div>
      //         <div className="form-group">
      //         <label>Assign To</label>
      //         <input
      //           type="text"
      //           className="form-control"
      //           value={assignedto}
      //           onChange={handleChange}
      //           name="assignedto"
      //         />
      //       </div>
      //         <div className="form-group">
      //           <label>Description</label>
      //           <textarea
      //             rows="5"
      //             className="form-control"
      //             value={description}
      //             onChange={handleChange}
      //             name="description"
      //           ></textarea>
      //         </div>
             
      //       </ModalBody>
      //       <ModalFooter>
      //         <Button color="primary" onClick={handleUpdate}>
      //           Update
      //         </Button>{' '}
      //         <Button color="secondary" onClick={toggle}>
      //           Cancel
      //         </Button>
      //       </ModalFooter>
      //     </Modal>
      //   );
      // };
      
      // export default EditTask




































// import React, { useState , useEffect} from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
//     const [taskName, setTaskName] = useState('');
//     const [assign, setAssign] = useState('');
//     const [description, setDescription] = useState('');

//     const handleChange = (e) => {
        
//         const {name, value} = e.target

//         if(name === "taskName"){
//             setTaskName(value)
//         }
//         else if(name === "assign")
//         {
//             setAssign(value);
//        }
//         else{
//             setDescription(value)
//         }


//     }

//     useEffect(() => {
//         setTaskName(taskObj.Name)
//         setAssign(taskObj.Assign)
//         setDescription(taskObj.Description)
//     },[])

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         let tempObj = {}
//         tempObj['Name'] = taskName
//         tempObj['Assign'] = assign
//         tempObj['Description'] = description
//         updateTask(tempObj)
//     }

//     return (
//         <Modal isOpen={modal} toggle={toggle}>
//             <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
//             <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//             </ModalFooter>
//       </Modal>
//     );
// };

// export default EditTaskPopup;