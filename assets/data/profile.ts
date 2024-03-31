export const data = {
    name: 'Anil S Nair',
    designation: 'Frontend Developer',
    description: `
    Hello there! I'm Anil, and I'm thrilled to share my portfolio with you. Here, 
    you'll find a collection of my work that spans frontend. From design to development, 
    each project is a labor of love, crafted with care and creativity.`,
    menuOptions: [
        {
            name: 'About Me',
            link: '',
            id: 'aboutme',
        },
        {
            name: 'Resume',
            link: 'resume',
            id: 'resume',
        },
        {
            name: 'Portfolio',
            link: 'portfolio',
            id: 'portfolio',
        },
        {
            name: 'Contact',
            link: 'contact',
            id: 'contact',
        },
    ],
    aboutMeDetail: {
        'whatIDo':
        {
            heading: 'What I Do',
            details: [
                {
                    icon: 'desktop_windows',
                    content: `Design and implement user interfaces: Front-end developers are responsible for translating design mockups and wireframes into functional user interfaces using HTML, CSS, and JavaScript. They ensure that the UI elements are visually appealing, intuitive to use, and aligned with the overall design aesthetic.`
                },
                {
                    icon: 'desktop_windows',
                    content: `Cross-browser compatibility and responsiveness: Front-end developers must ensure that websites and web applications look and function consistently across different web browsers and devices. This involves utilizing responsive design techniques to adapt layouts and styles based on screen size and device orientation.`
                },
                {
                    icon: 'desktop_windows',
                    content: `Collaboration with designers and back-end developers: Front-end developers work closely with UI/UX designers to understand design requirements and implement them effectively. They also collaborate with back-end developers to integrate front-end code with server-side logic, such as API calls and data retrieval.`
                },
                {
                    icon: 'desktop_windows',
                    content: `Optimizing performance: Front-end developers optimize website performance by writing efficient code, minimizing HTTP requests, and optimizing images and other media files. They also implement techniques like lazy loading and code splitting to improve page load times and overall user experience.`
                },
                {
                    icon: 'desktop_windows',
                    content: `Testing and debugging: Front-end developers conduct thorough testing to identify and fix bugs, inconsistencies, and usability issues. This may involve manual testing, as well as using debugging tools and browser developer tools to troubleshoot code errors and ensure functionality across different environments.`
                },
                {
                    icon: 'desktop_windows',
                    content: `Staying updated on emerging technologies: Front-end development is a rapidly evolving field, with new tools, frameworks, and best practices emerging regularly. Front-end developers invest time in learning and staying updated on the latest trends and technologies to incorporate them into their workflow and deliver innovative solutions to clients and users.`
                },
            ]
        },
        'companies': {
            heading: 'Companies',
            details: [
                {
                    icon: 'IBM',
                    name: 'IBM',
                    link: 'https://www.ibm.com',
                    from: 'Jan 2022',
                    to: 'Current'
                },
                {
                    icon: 'Fingent',
                    name: 'Fingent',
                    link: 'https://www.fingent.com',
                    from: 'Dec 2020',
                    to: 'Jan 2022'
                },
                {
                    icon: 'Rapid Value',
                    name: 'Rapid Value',
                    link: 'https://www.aspiresolution.com/',
                    from: 'Jul 2019',
                    to: 'Dec 2020'
                },
            ]
        },
        'funFacts': {
            heading: 'Fun Facts',
            details: [
                {
                    icon: 'desktop_windows',
                    content: `Front-end developers often engage in "CSS battles," where they compete to create the most visually impressive designs using only HTML and CSS, pushing the boundaries of what's possible with front-end technologies.`
                },
                {
                    icon: 'desktop_windows',
                    content: `JavaScript has evolved into a powerhouse language that drives not only web browsers but also server-side, mobile, and desktop applications through various frameworks and libraries.`
                },
            ]
        }
    },
    education: [
        {
            year: '2019',
            institution: 'Kerala Technological University (KTU)',
            topic: 'Bachelor of Technology in Information Technology',
            gpa: '7.17 / 10'
        },
        {
            year: '2015',
            institution: 'Depaul Public School, Thodupuzha',
            topic: 'Senior Secondary School Examination - Computer Science',
            gpa: '86.2%'
        },
        {
            year: '2013',
            institution: 'Jai Rani Public School',
            topic: 'Secondary School Examination',
            gpa: '83.6%'
        },
    ],
    experience: [
        {
            year: 'Jan 2022 - Current',
            institution: 'IBM',
            designation: 'Senior System Engineer',
            exp: '12 Months',
            start: '01/01/2022',
            end: new Date()
        },
        {
            year: 'Dec 2020 - Jan 2022',
            institution: 'Fingent Global Solutions',
            designation: 'Junior Angular Developer',
            exp: '12 Months',
            start: '12/01/2020',
            end: '01/01/2022'
        },
        {
            year: 'Jul 2019 - Dec 2020',
            institution: 'Rapid Value Solutions',
            designation: 'Software Engineer',
            exp: '18 Months',
            start: '07/01/2019',
            end: '12/01/2020'
        },
    ],
    primarySkills: [
        {
            skill: 'Angular 2+'
        },
        {
            skill: 'React'
        },
        {
            skill: 'Javascript'
        },
        {
            skill: 'Typescript'
        },
        {
            skill: 'SCSS'
        },
        {
            skill: 'CSS'
        },
        {
            skill: 'HTML'
        },
    ],
    secondarySkills: [
        {
            skill: 'Bootstrap'
        },
        {
            skill: 'Node'
        },
        {
            skill: 'Express JS'
        },
        {
            skill: 'Firebase'
        }
    ],
    contactDetails: [
        {
            icon: 'phone_iphone',
            heading: '+91 9746543002',
            info: 'Contact directly for more information regarding the project execution.'
        },
        {
            icon: 'pin_drop',
            heading: 'Bangalore',
            info: 'Contact directly for more information regarding the project execution.'
        },
        {
            icon: 'mail',
            heading: 'anilsnair261296@gmail.com',
            info: 'Contact directly for more information regarding the project execution.'
        },
    ],
    companyProjectDetails: [
        {
            title: 'Customer-Provider Communication Project',
            description: `CSM consists of advertising and campaign service. In this project, we are developing a web application
            for managing campaigns, opportunities via creating CRM and timing facilities for the faculties.`,
            jrDetail: [
                `Worked on front end team in the development phase.`,
                `Done code review for the team`,
                `Done deployment using Azure`
            ],
            techOveriew: ['Angular 12', 'Typescript', 'Bootstrap'],
            company: 'IBM'
        },
        {
            title: 'Advertising & Campainging Project',
            description: `IXM consists of advertising and campaign service. In this project, we are developing a web application
            for managing campaigns, opportunities via creating CRM and timing facilities for the faculties.`,
            jrDetail: [
                `Worked on front end team in the development phase.`
            ],
            techOveriew: ['Angular 10', 'Typescript'],
            company: 'Fingent'
        },
        {
            title: 'Portal For Teacher-Student Project',
            description: `DRC is a platform for online courses for students in the university. Students used the platform for enrolling courses w.r.t their department.`,
            jrDetail: [
                `Developing modules from the base level to final product.`,
                `Handling the issues and solving without compromising the quality to final product and work.`
            ],
            techOveriew: ['Angular 8', 'Typescript', 'Firebase'],
            company: 'RapidValue'
        },
        {
            title: 'Student Portal Project',
            description: `Laureate Education consists of universities and colleges with more than 200 campuses and online education.They are based out of Baltimore, MD. In this project, we are developing a web application for managing educational part for the students.`,
            jrDetail: [
                `Worked on front end team in the development phase.`,
                `Developing modules from the base level to final product.`
            ],
            techOveriew: ['Angular 8', 'Typescript', 'Storybook'],
            company: 'RapidValue'
        },
        {
            title: 'Portal For Doctor-Patient Project',
            description: `AEA is one of the leading eye care hospitals in South Florida. This is a web application which deals with the appointment and referral management system of AEA.`,
            jrDetail: [
                `Handling the issues and solving without compromising the quality to final product and work.`
            ],
            techOveriew: ['Angular 8', 'Typescript'],
            company: 'RapidValue'
        },
        {
            title: 'Leaf Disease Detection',
            description: `Leaf disease detection, done as B-Tech final year project. We find the leaf diseases using machine leaning and image processing.`,
            jrDetail: [],
            techOveriew: ['Python'],
            company: 'College Project'
        },

    ],
    internalProjectDetails: [
        {
            title: 'Dunzo Mock',
            description: `CSM consists of advertising and campaign service. In this project, we are developing a web application
            for managing campaigns, opportunities via creating CRM and timing facilities for the faculties.`,
            jrDetail: [
                `Worked on front end team in the development phase.`,
                `Done code review for the team`,
                `Done deployment using Azure`
            ],
            techOveriew: ['Angular 12', 'Typescript', 'Bootstrap'],
            company: 'Internal'
        },
        {
            title: 'Portal For Idukki Disctrict Covid Vaccine Availability',
            description: `IXM consists of advertising and campaign service. In this project, we are developing a web application
            for managing campaigns, opportunities via creating CRM and timing facilities for the faculties.`,
            jrDetail: [
                `Worked on front end team in the development phase.`
            ],
            techOveriew: ['Angular 10', 'Typescript'],
            company: 'Internal'
        },
        {
            title: 'Application for Medicine Delivery',
            description: `DRC is a platform for online courses for students in the university. Students used the platform for enrolling courses w.r.t their department.`,
            jrDetail: [
                `Developing modules from the base level to final product.`,
                `Handling the issues and solving without compromising the quality to final product and work.`
            ],
            techOveriew: ['Angular 8', 'Typescript', 'Firebase'],
            company: 'Internal'
        },
        {
            title: 'Paytm BE Mock',
            description: `Laureate Education consists of universities and colleges with more than 200 campuses and online education.They are based out of Baltimore, MD. In this project, we are developing a web application for managing educational part for the students.`,
            jrDetail: [
                `Worked on front end team in the development phase.`,
                `Developing modules from the base level to final product.`
            ],
            techOveriew: ['Node'],
            company: 'Internal'
        },
        {
            title: 'Influencer-Customer Portal',
            description: `AEA is one of the leading eye care hospitals in South Florida. This is a web application which deals with the appointment and referral management system of AEA.`,
            jrDetail: [
                `Handling the issues and solving without compromising the quality to final product and work.`
            ],
            techOveriew: ['Angular 8', 'Typescript'],
            company: 'Internal'
        }

    ]
};
