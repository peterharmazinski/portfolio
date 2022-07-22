const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  logo: 'PH',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Peter Harmazinski',
  role: 'Data Visualization, Analytics, and Web Developer',
  description:
    "I design and develop enjoyable user experiences to enhance data-driven decision-making. I'm passionate about continuous improvement, accessibility, and helping people.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/peterharmazinski/',
    github: 'https://github.com/peterharmazinski',
    tableau: 'https://public.tableau.com/app/profile/peter.harmazinski'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Tableau', 'Dashboard', 'Business'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'foreign-refugees.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/ForeignRefugeeImmigrationtotheUnitedStates2009-2018/ForeignRefugees'
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    link: '/dashboards'
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    link: '/dashboards'
  },
]

const technical_skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    name: 'Tableau',
    description: 'I\'ve mentored others and created/maintained an internal Cigna Tableau chat to improve firmwide collaboration and idea-sharing.'
  },{
    name: 'SQL',
    description: ''
  },{
    name: 'Cassandra',
    description: 'I designed Cassandra tables and queries to replace relational tables, reducing overall query time.'
  },{
    name: 'Alteryx',
    description: 'I have a certification in Alteryx and used it at Chase to transform data for Tableau consumption.. It can make ETL easier to understand and maintain with a visual format. Use containers and comments to help viewers understand the workflow more easily.'
  },{
    name: 'JavaScript',
    description: 'I started using vanilla JavaScript and Node.js to build Web dashboards hosted on SharePoint. Later on, I evolved those JavaScript dashboards into reusable components with React.'
  },{
    name: 'React',
    description: 'I started working with React as a Web developer with JPMorgan Markets. After that I used it to create a reusable library of dashboard components reducing development time by 50%. This portfolio is made with React.'
  },{
    name: 'HTML',
    description: 'Use semantic HTML to make your code easier to understand and improve accessibility.'
  },{
    name: 'CSS',
    description: 'I\'ve used CSS and SASS. I find styling websites fun as it satisfies my artistic side.'
  },{
    name: 'Python',
    description: 'It was easy to learn Python after I learned Java. I used Python to develop models for my Masters degree. I\'m also using Python to query REST APIs for the Web dashboards in this portfolio site.'
  },{
    name: 'Java',
    description: 'Java was my first programming language. I took a basic Java class in college, found a Java mentor, became certified, and obtained a Web Developer role, where I used Java object-oriented programming to migrate from Oracle data access objects to Cassandra, then make that data available through APIs.'
  }
]

const soft_skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    name: 'Leadership',
    description: ''
  },{
    name: 'Requirements Gathering',
    description: 'I work closely with stakeholders to identify user needs.'
  },{
    name: 'Continuous Improvement',
    description: 'I\'m always looking for ways to improve processes and improve myself.'
  },{
    name: 'Training',
    description: ''
  },{
    name: 'Mentoring',
    description: ''
  },{
    name: 'Critical Thinking',
    description: ''
  },{
    name: 'Design Thinking',
    description: ''
  },{
    name: 'Resourceful',
    description: ''
  },{
    name: 'Humorous',
    description: ''
  },{
    name: 'Teamwork',
    description: ''
  },{
    name: 'Empathy',
    description: ''
  },{
    name: 'Strategic Planning',
    description: ''
  },{
    name: 'Building Relationships',
    description: ''
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pharmazinski@gmail.com',
}

export { header, about, projects, technical_skills, soft_skills, contact }
