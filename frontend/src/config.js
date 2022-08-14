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
    name: 'Foreign Refugee Immigration',
    description:
      'Interactive business-style dashboard that makes use of set actions to empower users to drill down with multiple combinations of year, country of origin, state, and city.',
    stack: ['Tableau', 'Dashboard', 'Business-Style'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/Fo/ForeignRefugeeImmigrationtotheUnitedStates2009-2018/ForeignRefugees/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/ForeignRefugeeImmigrationtotheUnitedStates2009-2018/ForeignRefugees',
    year: '2022'
  },
  {
    name: 'Pokemon Metrics',
    description:
      'I grew up with Pokemon and now my kids like Pokemon too, so this was an opportunity to use some fun data with a business-style design. I made use of set actions and collapsible containers. There\'s an opportunity to use parameter actions with the metrics, however I\'ve found that parameter actions performance is worse than a simple dropdown, which also has improved discoverable.',
    stack: ['Tableau', 'Dashboard', 'Business-Style'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/Po/PokemonInc_/1_PokemonComparison2/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/PokemonInc_/1_PokemonComparison2',
    year: '2022'
  },
  {
    name: 'Comparing Designs',
    description:
      'The design of a dashboard can greatly affect it\'s readbility and usability. This dashboard provides a contrast of two designs. On the left, color and light borders are used to differentiate and identify relationships between entities. For example, The Number of Facilities KPI is in the same card as the Growth by Year, indicating a relationship. Using a card design format for visualizations also aligns with common Web UI design best practices. On the right, it\'s difficult to identify the relationship between different visualizations.',
    stack: ['Tableau', 'Dashboard', 'Informative'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/Co/ComparingDashboardDesigns/Comparison/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/ComparingDashboardDesigns/Comparison',
    year: '2022'
  },
  {
    name: 'Viz for Social Good',
    description:
      'This was a volunteer project aimed at highlighting the accomplishments of the organizating and its top volunteers, while enabling new charitable organizations and volunteers to join.',
    stack: ['Tableau', 'Dashboard', 'Volunteer'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/vf/vfsg/VFSG/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/vfsg/VFSG',
    year: '2020'
  },
  {
    name: 'Birth Defects',
    description:
      'I\'m always looking for ways to improve on dashboards designs. This dashboard was a way to try out various techniques: dark mode, pagination, filter actions, parameter actions, ',
    stack: ['Tableau', 'Dashboard', 'Practice'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/Bi/BirthDefects/Dashboard1/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/BirthDefects/Dashboard1',
    year: '2020'
  },
  {
    name: 'Customer Churn',
    description:
      'https://github.com/peterharmazinski/customer-churn/blob/master/machine_learning/customer_churn.ipynb',
    stack: ['Data Science', 'Python', 'Modeling'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'customer_churn_preview.png',
    link: 'https://github.com/peterharmazinski/customer-churn/blob/master/machine_learning/customer_churn.ipynb',
    year: '2020'
  },
  {
    name: '2019 SUV Comparison',
    description:
      'Master\'s degree project. I used Stories to break down the overall results and the 2 criteria. I used charts I normally wouldn\'t ',
    stack: ['Tableau', 'Dashboard', 'Degree'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/20/2019SUVComparison/Story1/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/2019SUVComparison/Story1',
    year: '2019'
  },
  {
    name: 'Makeover Monday 2019.42',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Tableau', 'Dashboard', 'Practice'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/Ma/MakeoverMonday-2019_42/Dashboard1/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/MakeoverMonday-2019_42/Dashboard1',
    year: '2019'
  },
  {
    name: 'Tour de France',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Tableau', 'Dashboard', 'Practice'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/To/TourdeFrance_15703005468110/Dashboard1/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/TourdeFrance_15703005468110/Dashboard1',
    year: '2019'
  },
  {
    name: 'US Breweries',
    description:
      'I created this for fun and matched the colors to common beer colors. Key figures are enlarged for emphasis and to draw attention. I like to use this technique in tooltips when describing how a metric was calculated.',
    stack: ['Tableau', 'Dashboard', 'Practice'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://public.tableau.com/static/images/U_/U_S_Breweries/Dashboard/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/U_S_Breweries/Dashboard',
    year: '2019'
  },
  {
    name: 'Fandango Scores',
    description: '',
    stack: [''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: '',
    link: 'https://github.com/peterharmazinski/fandango-scores/blob/master/fandango_scores.ipynb',
    year: '2019'
  },
  {
    name: 'Web Scraper',
    description: '',
    stack: [''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: '',
    link: 'https://github.com/peterharmazinski/us-census-bureau-web-scraper/blob/main/c996_project.ipynb',
    year: '2019'
  },
  {
    name: 'Covid-19 Twitter Sentiment',
    description: '',
    stack: [''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: '',
    link: 'https://github.com/peterharmazinski/masters-capstone/blob/main/capstone.ipynb',
    year: '2020'
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
