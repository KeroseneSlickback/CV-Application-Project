import React, { Component, useState } from 'react';
import Personal from './Personal';
import WorkExp from './WorkExp';
import Education from './Education';
import '../styles/myStyles.css';

function Main() {
	const [personalInfo, setPersonalInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});
	const [workInfos, setWorkInfo] = useState([
		{ companyName: '', position: '', jobTasks: '', date: '' },
	]);

	const [educations, setEducation] = useState([
		{ college: '', study: '', years: '' },
	]);

	const handleSubmit = e => {
		e.preventDefault();
		console.log();
	};

	const handlePersonalInfo = event => {
		const { name, value } = event.target;
		setPersonalInfo(previous => {
			return { ...previous, [name]: value };
		});
		console.log(personalInfo);
	};

	const handleWorkInfo = (event, index) => {
		const values = [...workInfos];
		values[index][event.target.name] = event.target.value;
		setWorkInfo(values);
		console.log(workInfos);
	};

	const handleEduInfo = (event, index) => {
		const values = [...educations];
		values[index][event.target.name] = event.target.value;
		setEducation(values);
	};

	const addWorkSection = e => {
		setWorkInfo([
			...workInfos,
			{ companyName: '', position: '', jobTasks: '', date: '' },
		]);
	};

	const removeWorkSection = index => {
		const values = [...workInfos];
		values.splice(index, 1);
		setWorkInfo(values);
	};

	const addEduSection = e => {
		setEducation([...educations, { college: '', study: '', years: '' }]);
	};

	const removeEduSection = index => {
		const values = [...educations];
		values.splice(index, 1);
		setEducation(values);
	};

	return (
		<div className="container">
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<div className="personal-info">
						<h3>Personal Info:</h3>
						<label>
							First name:
							<input
								type="text"
								name="firstName"
								placeholder="First name"
								value={personalInfo.firstName}
								onChange={event => handlePersonalInfo(event)}
							/>
						</label>
						<br />
						<label>
							Last name:
							<input
								type="text"
								name="lastName"
								placeholder="Last Name"
								value={personalInfo.lastName}
								onChange={event => handlePersonalInfo(event)}
							/>
						</label>
						<br />
						<label>
							Email:
							<input
								type="text"
								name="email"
								placeholder="Email@gmail.com"
								value={personalInfo.email}
								onChange={event => handlePersonalInfo(event)}
							/>
						</label>
						<br />
						<label>
							Phone number:
							<input
								type="text"
								name="phone"
								placeholder="1(123) 456-7890"
								value={personalInfo.phone}
								onChange={event => handlePersonalInfo(event)}
							/>
						</label>
						<hr />
					</div>
					<div className="work-exp">
						<h3>Work Experience:</h3>
						{workInfos.map((workInfo, index) => (
							<div key={index}>
								<label>
									Company name:
									<input
										type="text"
										name="companyName"
										placeholder="Company Name"
										value={workInfo.companyName}
										onChange={event => handleWorkInfo(event, index)}
									/>
								</label>
								<br />
								<label>
									Position name:
									<input
										type="text"
										name="position"
										placeholder="Position Name"
										value={workInfo.position}
										onChange={event => handleWorkInfo(event, index)}
									/>
								</label>
								<br />
								<label>
									Job tasks:
									<input
										type="text"
										name="jobTasks"
										placeholder="Company Name"
										value={workInfo.jobTasks}
										onChange={event => handleWorkInfo(event, index)}
									/>
								</label>
								<br />
								<label>
									Start and end date:
									<input
										type="text"
										name="date"
										placeholder="Aug 2018 - Current"
										value={workInfo.date}
										onChange={event => handleWorkInfo(event, index)}
									/>
								</label>
								{index === 0 ? null : (
									<button onClick={() => removeWorkSection(index)}>
										Remove
									</button>
								)}
								<hr />
							</div>
						))}
						<button onClick={() => addWorkSection()}>Add</button>
					</div>
					<br />
					<div className="education">
						<h3>Education:</h3>
						{educations.map((edu, index) => (
							<div key={index}>
								<label>
									College name:
									<input
										type="text"
										name="college"
										placeholder="College name"
										value={edu.college}
										onChange={event => handleEduInfo(event, index)}
									/>
								</label>
								<br />
								<label>
									Subjects studied:
									<input
										type="text"
										name="study"
										placeholder="Subjects studied"
										value={edu.study}
										onChange={event => handleEduInfo(event, index)}
									/>
								</label>
								<br />
								<label>
									Years studied:
									<input
										type="number"
										name="years"
										placeholder="Number of years"
										value={edu.years}
										onChange={event => handleEduInfo(event, index)}
									/>
								</label>
								{index === 0 ? null : (
									<button onClick={() => removeEduSection(index)}>
										Remove
									</button>
								)}
								<hr />
							</div>
						))}
						<hr />
						<button onClick={() => addEduSection()}>Add</button>
					</div>
					<hr />
					<button type="submit">Generate</button>
				</form>
			</div>

			<div className="output-field">
				<Personal
					firstName={personalInfo.firstName ? personalInfo.firstName : 'Bob'}
					lastName={personalInfo.lastName ? personalInfo.lastName : 'Jobseeker'}
					email={personalInfo.email ? personalInfo.email : 'email@email.com'}
					phone={personalInfo.phone ? personalInfo.phone : '1(702)123-4567'}
				/>
				<h2>Work Experience:</h2>
				{workInfos.map(work => (
					<WorkExp
						companyName={work.companyName ? work.companyName : 'McCompany'}
						position={work.position ? work.position : 'Excellent worker'}
						jobTasks={work.jobTasks ? work.jobTasks : 'Being amazing'}
						date={work.date ? work.date : 'Aug 2018 - Current'}
					/>
				))}
				<h2>Education:</h2>
				{educations.map(edu => (
					<Education
						college={edu.college ? edu.college : 'University of the Web'}
						study={edu.study ? edu.study : 'Computer Science'}
						years={edu.years ? edu.years : '6'}
					/>
				))}
			</div>
		</div>
	);
}

export default Main;
