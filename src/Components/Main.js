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
			<h1 className="title">CV Application Creator</h1>
			<div className="page-container">
				<div className="form-container">
					<form onSubmit={handleSubmit}>
						<h3>Personal Info:</h3>
						<div className="personal-info">
							<p>First name:</p>
							<input
								type="text"
								name="firstName"
								placeholder="Bob"
								value={personalInfo.firstName}
								onChange={event => handlePersonalInfo(event)}
							/>
							<br />
							<p>Last name:</p>
							<input
								type="text"
								name="lastName"
								placeholder="Jobseeker"
								value={personalInfo.lastName}
								onChange={event => handlePersonalInfo(event)}
							/>
							<br />
							<p>Email:</p>
							<input
								type="text"
								name="email"
								placeholder="Email@gmail.com"
								value={personalInfo.email}
								onChange={event => handlePersonalInfo(event)}
							/>
							<br />
							<p>Phone number:</p>
							<input
								type="text"
								name="phone"
								placeholder="1(701) 123-4567"
								value={personalInfo.phone}
								onChange={event => handlePersonalInfo(event)}
							/>
						</div>
						<div className="work-exp">
							<h3>Work Experience:</h3>
							{workInfos.map((workInfo, index) => (
								<div className="work-map" key={index}>
									<p>Company name:</p>
									<input
										type="text"
										name="companyName"
										placeholder="McCompany"
										value={workInfo.companyName}
										onChange={event => handleWorkInfo(event, index)}
									/>
									<p>Position name:</p>
									<input
										type="text"
										name="position"
										placeholder="Excellent worker"
										value={workInfo.position}
										onChange={event => handleWorkInfo(event, index)}
									/>
									<p>Job tasks:</p>
									<input
										type="text"
										name="jobTasks"
										placeholder="Being amazing"
										value={workInfo.jobTasks}
										onChange={event => handleWorkInfo(event, index)}
									/>
									<p>Start and end date:</p>
									<input
										type="text"
										name="date"
										placeholder="Aug 2018 - Current"
										value={workInfo.date}
										onChange={event => handleWorkInfo(event, index)}
									/>
									<br />
									{index === 0 ? null : (
										<button onClick={() => removeWorkSection(index)}>
											Remove
										</button>
									)}
								</div>
							))}
							<button onClick={() => addWorkSection()}>Add</button>
						</div>
						<div className="education">
							<h3>Education:</h3>
							{educations.map((edu, index) => (
								<div className="edu-map" key={index}>
									<p>College name:</p>
									<input
										type="text"
										name="college"
										placeholder="University of the Web"
										value={edu.college}
										onChange={event => handleEduInfo(event, index)}
									/>
									<p>Subjects studied:</p>
									<input
										type="text"
										name="study"
										placeholder="Computer Science"
										value={edu.study}
										onChange={event => handleEduInfo(event, index)}
									/>
									<p>Years studied:</p>
									<input
										type="number"
										name="years"
										placeholder="6"
										value={edu.years}
										onChange={event => handleEduInfo(event, index)}
									/>
									<br />
									{index === 0 ? null : (
										<button onClick={() => removeEduSection(index)}>
											Remove
										</button>
									)}
								</div>
							))}
							<button onClick={() => addEduSection()}>Add</button>
						</div>
						<button type="submit">Generate</button>
					</form>
				</div>

				<div className="output-field">
					<Personal
						firstName={personalInfo.firstName ? personalInfo.firstName : 'Bob'}
						lastName={
							personalInfo.lastName ? personalInfo.lastName : 'Jobseeker'
						}
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
		</div>
	);
}

export default Main;
