import React, { Component } from 'react';
import Personal from './Personal'
import WorkExp from './WorkExp'
import Education from './Education'

// A "Add" button that adds an object to an array
// Based from array length, generate sections to add in both form and display

class Main extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			work: [
				{
					companyName: '',
					position: '',
					jobTasks: '',
					date: '',
				}
			],
			education: [],
			college: '',
			study: '',
			years: '',
			isSubmitted: false,
		};
		this.handleInfo = this.handleInfo.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
		this.addSection = this.addSection.bind(this)
		this.removeSection = this.removeSection.bind(this)
	}

	handleInfo(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value })
		console.log(e);
		// if ([name] === 'companyName' || 'position' || 'jobTasks' || 'date') {

		// 	if (this.state.work.length === 0) {
		// 		this.setState({})
		// 	}

		// 	this.setState({work: this.state.work.concat([
		// 	{
		// 		section: this.state.work.length,
		// 		companyName: companyName.value,
		// 		position: position.value,
		// 		jobTasks: jobTasks.value,
		// 		date: date.value,

		// 	}])
		// })
		// } else {
		// }
	}

	handleSubmit(e) {
		e.preventDefault()
		this.setState({isSubmitted: !this.state.isSubmitted})
		console.log(this.state.isSubmitted)
	}

	addSection(e) {
		const { name, value } = e.target
		e.preventDefault()
		console.log(e, this.state.work)
	}

	removeSection(e) {		
		e.preventDefault()
		console.log('remove')
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<h3>Personal Info:</h3>
							<label>
								First name:
								<input
									type="text"
									name="firstName"
									placeholder="First name"
									value={this.state.firstName}
									onChange={this.handleInfo}
								/>
							</label>
							<br />
							<label>
								Last name:
								<input
									type="text"
									name="lastName"
									placeholder="Last Name"
									value={this.state.lastName}
									onChange={this.handleInfo}
								/>
							</label>
							<br />
							<label>
								Email:
								<input
									type="text"
									name="email"
									placeholder="Email@gmail.com"
									value={this.state.email}
									onChange={this.handleInfo}
								/>
							</label>
							<br />
							<label>
								Phone number:
								<input
									type="text"
									name="phone"
									placeholder="1(123) 456-7890"
									value={this.state.phone}
									onChange={this.handleInfo}
								/>
							</label>
							<hr />
					</div>
					<div>
						<h3>Work Experience:</h3>
							<div>
								<label>
								Company name:
								<input 
									type="text"
									name='companyName'
									placeholder="Company Name"
									value={this.state.companyName}
									onChange={this.handleInfo}
								/>
							</label>
							<br />
							<label>
								Position name:
								<input 
									type="text"
									name='position'
									placeholder="Position Name"
									value={this.state.position}
									onChange={this.handleInfo}
								/>
							</label>
							<br />
							<label>
								Job tasks:
								<input 
									type="text"
									name='jobTasks'
									placeholder="Company Name"
									value={this.state.jobTasks}
									onChange={this.handleInfo}
								/>
							</label>
							<br />
								<label>
									Start and end date:
									<input
										type="text"
										name="date"
										placeholder="Aug 2018 - Current"
										value={this.state.date}
										onChange={this.handleInfo}
									/>
							</label>
						</div>
						<button onClick={this.addSection}>Add</button>
						{this.state.work.length > 1 ? 
							<button onClick={this.removeSection}>Remove</button>
						: null}
					</div>
						<hr />
					<div>	
						<h3>Education:</h3>
							<label>
								College name:
								<input 
									type='text'
									name='college'
									placeholder='College name'
									value={this.state.college}
									onChange={this.handleInfo}
								/>
							</label>
							<br />
							<label>
								Subjects studied:
								<input 
									type='text'
									name='study'
									placeholder='Subjects studied'
									value={this.state.study}
									onChange={this.handleInfo}
								/>
							</label>
							<br />
							<label>
								Years studied:
								<input 
									type='number'
									name='years'
									placeholder='Number of years'
									value={this.state.years}
									onChange={this.handleInfo}
								/>
							</label>
					</div>
					<button type="submit">Generate</button>
				</form>

				<Personal 
					firstName={this.state.isSubmitted ? this.state.firstName : 'Bob'}
					lastName={this.state.isSubmitted ? this.state.lastName : 'Jobseeker'}
					email={this.state.isSubmitted ? this.state.email : 'email@email.com'}
					phone={this.state.isSubmitted ? this.state.phone : '1(702)123-4567'}
				/>

				<WorkExp 
					companyName={this.state.isSubmitted ? this.state.companyName : 'McCompany'}
					position={this.state.isSubmitted ? this.state.position : 'Excellent worker'}
					jobTasks={this.state.isSubmitted ? this.state.jobTasks : 'Being amazing'}
					date={this.state.isSubmitted ? this.state.date : 'Aug 2018 - Current'}
				/>

				<Education 	
					college={this.state.isSubmitted ? this.state.college: 'University of the Web'}
					study={this.state.isSubmitted ? this.state.study : 'Computer Science'}
					years={this.state.isSubmitted ? this.state.years : '6'}
				/>

			</div>
		);
	}
}

export default Main;
