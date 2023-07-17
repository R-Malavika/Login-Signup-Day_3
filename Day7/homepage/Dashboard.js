import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
function Dashboard() {
  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8081/getEmployee')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }

  return (
<div>
    <Navbar/>
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Progress</h3>
      </div>
      <Link to="/create" className='btn btn-secondary'>Assign Projects</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Image</th>
              <th>Project</th>
              <th>Team Manager</th>
              <th>Team Leader</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{
                    <img src={`http://localhost:8081/images/`+employee.image} alt="" className='employee_image'/>
                    }</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link to={`/employeeEdit/`+employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <button onClick={e => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Dashboard