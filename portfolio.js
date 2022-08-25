import emoji from "react-easy-emoji";

export const greetings = {
	name: "Hilario Villamar Beltran",
	title: "Hi all, I'm Hilario",
	description:"I am a Full-Stack Software Engineer with 7+ years of experience in the design, development, integration and implementation of Technology Solutions and Project Management IT with use of agile methodologys.",
	resumeLink: "https://www.linkedin.com/in/hvillamar/",
};

export const openSource = {
	githubUserName: "hvillamardev",
};

export const contact = {};

export const socialLinks = {
	//facebook: "https://www.facebook.com/1hanzla100",
	//instagram: "https://www.instagram.com/1hanzla100",
	twitter: "https://twitter.com/hvillamardev",
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
			"⚡ Tech Lead with experience in leading software development teams and responsible for the quality of technical products."
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
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "google-cloud",
			fontAwesomeClassname: "logos:google-cloud",
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
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "gitlab",
			fontAwesomeClassname: "logos:gitlab",
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
		Stack: "Software Architecture",
		progressPercentage: "90",
	},
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
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
		Stack: "Scrum",
		progressPercentage: "100",
	},
];

export const educationInfo = [
	{
		schoolName: "Universidad Católica de Santiago de Guayaquil (UCSG)",
		subHeader: "B.S. Computational Systems Engineering",
		duration: "2012 - 2017",
		desc: "Information technology",
		descBullets: [
		],
	},
	{
		schoolName: "Universidad Internacional de La Rioja (UNIR)",
		subHeader: "M.S. Software Engineering and Computer Systems",
		duration: "2021 - 2023",
		desc: "Information technology",
		descBullets: [
		],
	}
];

export const experience = [
	{
		role: "Technical Leader",
		company: "Tiendamia",
		companylogo: "/img/icons/common/tiendamia.png",
		date: "Jul 2022 – Present",
		desc: "Technical leader of the ecommerce tribe software development team: Magento2, PHP, JS, AWS.",
	},
	{
		role: "Head of Software Engineering",
		company: "Ikusoft",
		companylogo: "/img/icons/common/ikusoft.jpg",
		date: "Jan 2022 – Present",
		desc: "Independent professional in development of cloud solutions, websites and chatbots: Python, JS, GCP.",
	},
	{
		role: "Technical Leader",
		company: "Telconet",
		companylogo: "/img/icons/common/telcoLogo.png",
		date: "Dec 2020 – Feb 2022",
		desc: "Senior Software Engineer in development and automation of Web, IoT and AI technology solutions: Python, JS, Linux.",
		descBullets: [
		],
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
