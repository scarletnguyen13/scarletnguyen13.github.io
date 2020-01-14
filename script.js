const data = {
  "2017" : {
    experience: 
      {
        title: "Woman In Tech World (WiTWorld) // Core Intern",
        date: "June 2017 - July 2018",
        content: [
          ">> Held multiple roles: recruiter, content-marketer, resources-manager and events organizer",
          ">> Contacted and interviewed potential candidates, then guided them throughout the onboarding process",
          ">> Contacted to more than 100 companies in Canada to advertise the organization’s missions and upcoming events",
          ">> Compiled a full list of more than 200 worldwide universities’ contact and quality content resources",
          ">> Managed simultaneously 24 Picatic event pages and volunteers for those events"
				],
				img: "./image/experiences/witworld.jpeg"
      }
		,
		awards: [
			{
        title: "Finalist // VFS Creative Break Contest",
        date: "March 2017",
        content: [
          ">> Awarded winner received a free boothcamp of introduction to Game Design & Development implementing Unity 3D in duration of 3 days"
        ]
      },
      {
        title: "Finalist // UBC miniEnterprize",
        date: "February 2017",
        content: [
          ">> Solved Uber business & technology case study in a team and presented the solution to professional judges"
        ]
			}
    ],
    courses: [
			{
				name: "Harvard CS50",
				description: ">> Introduction to Computer Science course; CS50x teaches students how to think algorithmically and solve problems efficiently"
			},
			{
				name: "University of Washington CSE 142",
				description: ">> CSE 142 is an entry-level course that introduces students to essential computing concepts and teaches them how to write programs in Java"
			},
			{
				name: "UBC Software Development Micromasters",
				description: ">> A series composed of 6 core software engineering courses from UBC that prepare a student fully for a Software Engineering degree"
			},
			{
				name: "AP Computer Science A & IB Computer Science",
				description: ">> Design, write, and test computer programs with Java and learn software development methodologies"
			},
		],
	},
	"2018" : {
    experience: {
			title: "Hootsuite // High School Software Engineer Intern",
			date: "July 2018 - September 2018",
			content: [
				">> First female being accepted since the program first started in the last 4 years",
				">> First student being offered an extended internship as a part-time position",
				">> Designed and developed an internationalization service from scratch using Scala and Play framework",
				">> Threaded user data parameters and unified data storage among objects in GraphQL",
				">> Developed a new repo managing the user’s data and API calls to SCUM (Social Communication Service)",
				">> Performance Improvement: implemented the Proxy pattern and two types of cache (in-memory and decentralized)"
			],
			img: "./image/experiences/hootsuite1.jpg"
		},
		awards: [
			{
        title: "1st Place // Women in Tech Activation Hackathon",
        date: "October 2018",
        content: [
					">> Role: Tech Lead - Managed a team of 6 adults",
					">> Prototyped a platform that helps high school students connect with professional mentors in different industries based on matching interests"
        ]
			},
			{
        title: "1st Place // InnoHacks",
        date: "March 2018",
        content: [
					">> Established an embodying campaign focused on spreading oral health by educating rural Bolivian communities",
					">> Created and distributed sustainable hygiene supply package through recycled plastic waste material 3D printers"
        ]
			},
			{
        title: "3rd Place // EduHacks",
        date: "March 2018",
        content: [
					">> Prototyped a platform that helps high school students to find their passion"
        ]
			},
			{
        title: "1st Place // School Programming Team Challenge",
        date: "February 2018",
        content: [
					">> Role: Tech Lead",
					">> Managed a team of 10 novices given an unknown programming problem",
					">> Judges valued highly my leadership, time management and problem solving skills"
        ]
      }
    ],
	},
	"2019" : {
    experience: {
			title: "Hootsuite // High School Software Engineer Intern",
			date: "June 2019 - August 2019",
			content: [
				">> Implemented banners for Facebook Public Launch using React v.16.9",
				">> Worked on Scala microservices and API endpoints for @mention feature in Inbox",
				">> Database Improvement: restructured the double-storing message data and saved ~125-150 GB of memory in the database",
				">> Solved 3 customer-impact bugs that significantly improved the SLOs by over 20%",
				">> Refactored 714 performance and code style errors in GraphQL in the duration of my last 2 days"
			],
			img: "./image/experiences/hootsuite2.jpg"
		},
		education: {
			school: "University of British Columbia (UBC)",
			grad_year: "September 2019 - June 2023",
			degree: ">> Degree: Bachelor of Science - BSc.",
			major: ">> Expected Major: Computer Science"
		},
		scholarships: [
			">> Schulich Leader Scholarship Nomination",
			">> BC Achievement Scholarship"
		],
		clubs: [
			{
				name: "UBC Launch Pad",
				description: ">> A student-run software engineering team devoted to building software projects in a collaborative and professional environment. Our primary objective is to be the best space at UBC for students to meet other tech enthusiasts, build projects in a team setting, gain experience with professional development tools and principles, and share their knowledge with others."
			},
			{
				name: "UBC BizTech",
				description: ">> Through workshops, panels, keynotes, showcases and many other events, BizTech provides value-adding and memorable experiences that focus on the integration of two of the world’s most powerful fields; technology and business"
			},
		]
	},
	"2020" : {
    experience: {
			title: "Google // STEP Software Engineer Intern",
			date: "May 2020 - August 2020",
			content: [
				">> Team: Firebase Backend @Waterloo, CA",
				">> TBA"
			],
			img: "./image/experiences/google.jpeg"
		},
		courses: [
			{
				name: "CPSC 210",
				description: ">> Software Construction, where students learn about design, development, and analysis of robust software components such as software design, computational models, data structures, debugging, and testing using Java"
			},
			{
				name: "CPSC 121",
				description: ">> Models of Computation, where students learn about the physical and mathematical structures of computation such as boolean algebra and combinations logic circuits; proof techniques; functions and sequential circuits; sets and relations; finite state machines; sequential instruction execution"
			},
		]
	}
};

const SECTION_STYLE = 'color: #9e0b00; font-weight: 1000;'; 
const TITLE_STYLE = 'color: #d14d4d; font-weight: 700;';
const DATE_STYLE = 'color: #4d4d4d; font-style: italic;';
const CONTENT_STYLE = 'color: #666666;';
const TIMELINE_STYLE = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(';
const IMG_STYLE = 'max-width: 100%; height: auto; border-radius: 30px';

document.querySelectorAll(".range-step").forEach(function(step) {
	var input = step.querySelector('input');        
	input.oninput = function() { 
		colorizeTimeline(step, input.valueAsNumber);     
		colorizeBeforeNAfter(input);
		createPopup(step, input);
	};
	input.oninput();    
});

window.onresize = function(){
	document.querySelectorAll(".range").forEach(function(step) {
		var input = step.querySelector('input');    
		input.oninput();    
	});
};

function colorizeTimeline(step, inputValue) {
	step.querySelectorAll("li").forEach(li => {
		li.style.backgroundColor = li.value <= inputValue ? 'red' : '#aaa';
	});
}

function colorizeBeforeNAfter(input) {
	var valPercent = (input.valueAsNumber  - parseInt(input.min)) / (parseInt(input.max) - parseInt(input.min));  
	        

	var style = TIMELINE_STYLE + valPercent + ', red), color-stop(' + valPercent + ', #aaa));';

	input.style = style;
}

function createPopup(step, input) {
	const output = step.querySelector('output'); 

	if((' ' + step.className + ' ').indexOf(' ' + 'range-step-popup' + ' ') > -1) {
		var selectedOpt = step.querySelector('li[value="' + input.value + '"]');
		output.style.left = "50%"; 
		output.style.left = ((selectedOpt.offsetLeft + selectedOpt.offsetWidth/2) - output.offsetWidth/2) + 'px';

		document.getElementById("one").innerHTML = "";
		document.getElementById("two").innerHTML = "";

		pickContent(input.value);
	}   
}
 
function createDOM(element, content, parent, style) {
	const el = document.createElement(element);
	const c = document.createTextNode(content);

	el.appendChild(c);

	if (style !== null) {
		el.style = style;
	}
	
	const p = document.getElementById(parent);
	p.appendChild(el);
}

function createExperienceDOM(yearData) {
	createDOM("h2", "EXPERIENCE", "one", SECTION_STYLE);
	createDOM("h3", yearData.experience.title, "one", TITLE_STYLE);
	createDOM("h4", yearData.experience.date, "one", DATE_STYLE);
	yearData.experience.content.map(str => {
		createDOM("h5", str, "one", CONTENT_STYLE);
	})
}

function createAwardDOM(yearData) {
	createDOM("h2", "AWARDS", "two", SECTION_STYLE);
	yearData.awards.map(a => {
		createDOM("h3", a.title, "two", TITLE_STYLE);
		createDOM("h4", a.date, "two", DATE_STYLE);
		a.content.map(c => {
			createDOM("h5", c, "two", CONTENT_STYLE);
		})
		createDOM("br", "", "two", null);
	})
}

function createEductionDOM() {
	createDOM("h2", "EDUCATION", "two", SECTION_STYLE);
	createDOM("h3", data[2019].education.school, "two", TITLE_STYLE);
	createDOM("h4", data[2019].education.grad_year, "two", DATE_STYLE);
	createDOM("h5", data[2019].education.degree, "two", CONTENT_STYLE);
	createDOM("h5", data[2019].education.major, "two", CONTENT_STYLE);
}

function createSimpleSectionDOM(content, data) {
	createDOM("h2", content, "two", SECTION_STYLE);
	data.map(c => {
		createDOM("h3", c.name, "two", TITLE_STYLE);
		createDOM("h5", c.description, "two", CONTENT_STYLE);
		createDOM("br", "", "two", null);
	})
}

function createBreakDOM(el) {
	createDOM("br", "", el, null);
	createDOM("br", "", el, null);
}

function pickContent(year) {
	const img = document.createElement("img");
	img.style = IMG_STYLE;
	const one = document.getElementById("one");

	switch(year) {
		case "2017": {
			createExperienceDOM(data[2017]);

			createBreakDOM("one");

			img.src = data[2017].experience.img;

			createAwardDOM(data[2017]);

			createBreakDOM("two");

			createSimpleSectionDOM("SELF-TAUGHT COURSES", data[2017].courses);
		}
		break;
		case "2018": {
			createExperienceDOM(data[2018]);

			createBreakDOM("one");

			img.src = data[2018].experience.img;

			createAwardDOM(data[2018]);
		}
		break;
		case "2019": {
			createExperienceDOM(data[2019]);

			createBreakDOM("one");

			img.src = data[2019].experience.img;

			createEductionDOM();

			createBreakDOM("two");

			createDOM("h2", "SCHOLARSHIPS", "two", SECTION_STYLE);
			data[2019].scholarships.map(s => {
				createDOM("h5", s, "two", CONTENT_STYLE);
			})

			createBreakDOM("two");

			createSimpleSectionDOM("CLUBS", data[2019].clubs);
		}
		break;
		case "2020": {
			createExperienceDOM(data[2020]);
			createBreakDOM("one");

			img.src = data[2020].experience.img;
			createSimpleSectionDOM("UBC COURSES", data[2020].courses);
		}
    break;
  	default: break;
	}

	one.appendChild(img);
}