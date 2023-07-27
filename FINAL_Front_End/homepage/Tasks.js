import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Tasks() {
	const [data, setData] = useState({
		name: '',
		project: '',
		email: '',
		requirement: '',
		budget: '',
		image: ''
	})
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault();
		const formdata = new FormData();
		formdata.append("name", data.name);
		formdata.append("project", data.project);
		formdata.append("email", data.email);
		formdata.append("requirement", data.requirement);
		formdata.append("budget", data.budget);
		formdata.append("image", data.image);
		axios.post('http://localhost:8081/create', formdata)
		.then(res => {
			navigate('/employee')
		})
		.catch(err => console.log(err));
	}
	return (
		<div className='d-flex flex-column align-items-center pt-4'>
			<h2>Assign Projects</h2>
			<form class="row g-3 w-50" onSubmit={handleSubmit}>
			<div class="col-12">
					<label for="Name" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" placeholder='Name' required autoComplete='off'
					onChange={e => setData({...data, name: e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="Project-type" class="form-label">Project</label>
					<input type="text" class="form-control" id="inputEmail4" placeholder='project-type'required  autoComplete='off'
					onChange={e => setData({...data, project: e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="email" class="form-label">Email</label>
					<input type="email" class="form-control" required id="inputPassword4" placeholder='email'
					 onChange={e => setData({...data, email: e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="Budget in $" class="form-label">Budget</label>
					<input type="text" class="form-control" required id="inputSalary" placeholder="max-budget" autoComplete='off'
					onChange={e => setData({...data, budget: e.target.value})}/>
				</div>
				<div class="col-12">
					<label for="requirement" class="form-label">Requirement</label>
					<input type="text" class="form-control"required  id="inputAddress" placeholder="requirement" autoComplete='off'
					onChange={e => setData({...data, requirement: e.target.value})}/>
				</div>
				<div class="col-12 mb-3">
					<label class="form-label" for="inputGroupFile01">Select Image</label>
					<input type="file" class="form-control" required id="inputGroupFile01"
					onChange={e => setData({...data, image: e.target.files[0]})}/>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary">Create</button>
				</div>
			</form>
		</div>

	)
}

export default Tasks