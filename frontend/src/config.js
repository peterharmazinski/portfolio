const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'PH',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Peter Harmazinski',
  role: 'Data Visualization, Analytics, and Web Developer',
  description:
    "I design and developer enjoyable user experiences to enhance data-driven decision-making. I'm passionate about continuous improvement, accessibility, and helping people.",
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
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const technical_skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Tableau',
  'SQL',
  'Cassandra',
  'Alteryx',
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'Python',
  'Java'
]

const soft_skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Leadership',
  'Requirements Gathering',
  'Continuous Improvement',
  'Training',
  'Mentoring',
  'Critical Thinking',
  'Design Thinking',
  'Resourceful',
  'Humorous',
  'Teamwork',
  'Empathy',
  'Strategic Planning',
  'Building Relationships'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pharmazinski@gmail.com',
}

export { header, about, projects, technical_skills, soft_skills, contact }
