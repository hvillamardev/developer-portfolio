import emoji from "react-easy-emoji";

export const greetings = {
	name: "Hilario Villamar Beltran",
	title: "Hi all, I'm Hilario",
	description:
		"I am a Full Stack Engineer with 6+ years of experience in the design, development, integration and implementation of Technology Solutions and Project Management IT with use of agile methodologys.",
	resumeLink: "https://www.linkedin.com/in/hvillamar/",
};

export const openSource = {
	githubUserName: "hvillamardev",
};

export const contact = {};

export const socialLinks = {
	//facebook: "https://www.facebook.com/1hanzla100",
	//instagram: "https://www.instagram.com/1hanzla100",
	//twitter: "https://twitter.com/1hanzla100",
	github: "https://github.com/hvillamardev",
	linkedin: "https://www.linkedin.com/in/hvillamar/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Full Stack Developer expert in web design, programming languages, databases, servers, APIs and Version Control Systems."
		),
		emoji(
			"⚡ Devops Engineer with experience in coding and reengineering of processes for agile systems administration and collaboration with operations and development work teams."
		),
		emoji(
			"⚡ Software architect with experience in high level design decision making and technical standards including software coding standards, tools and platforms."
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "Angular",
			fontAwesomeClassname: "logos:angular-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "c-sharp",
			fontAwesomeClassname: "logos:c-sharp",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "azure",
			fontAwesomeClassname: "logos:azure-icon",
		},
		{
			skillName: "google-cloud",
			fontAwesomeClassname: "logos:google-cloud",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "jenkins",
			fontAwesomeClassname: "vscode-icons:file-type-jenkins",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "kubernetes",
			fontAwesomeClassname: "logos:kubernetes",
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "100",
	},
	{
		Stack: "Devops",
		progressPercentage: "90",
	},
	{
		Stack: "Software Architecture",
		progressPercentage: "80",
	},
	{
		Stack: "Scrum",
		progressPercentage: "100",
	},
];

export const educationInfo = [
	{
		schoolName: "Universidad Católica de Santiago de Guayaquil",
		subHeader: "Computational Systems Engineering",
		duration: "2012 - 2017",
		desc: "Information technology",
		descBullets: [
		],
	},
	{
		schoolName: "Universidad Internacional de La Rioja",
		subHeader: "Master's Degree in Software Engineering and Computer Systems",
		duration: "2021 - 2023",
		desc: "Information technology",
		descBullets: [
		],
	}
];

export const experience = [
	{
		role: "Technical Lead",
		company: "Telconet",
		companylogo: "/img/icons/common/telcoLogo.png",
		date: "Dec 2020 – Present",
		desc: "Senior Software Engineer in development and automation of business solutions with IoT and AI technology",
		descBullets: [
		],
	},
	{
		role: "Software Developer",
		company: "Only Control S.A.",
		companylogo: "/img/icons/common/ocLogo.png",
		date: "Jul 2017 – Dec 2020",
		desc: "Development and implementation of technological solutions for biometric and vehicle access control systems",
	},
	{
		role: "System Analyst",
		company: "BSPI",
		companylogo: "/img/icons/common/bspiLogo.png",
		date: "Oct 2016 – Jun 2017",
		desc: "Development and support of medical systems applications and maintenance of computer equipment",
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
