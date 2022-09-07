const header = {
  // all the properties are optional - can be left empty or deleted
  logo: 'PH',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Peter Harmazinski',
  role: 'Data Visualization, Analytics, and Web Developer',
  description:
    "<b>I make people's lives easier with data</b> by gathering, transforming, and visualizing data into consumable information to empower users to make data-driven decisions while minimizing user effort. I'm always looking to improve, help people, and provide a fantastic user experience.",
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
      'With wars around the world causing multiple refugee crises, this timely interactive business-style dashboard makes use of set actions to empower users to drill down with multiple combinations of year, country of origin, state, and city.',
    stack: ['Tableau', 'Dashboard', 'Business-Style'],
    image: 'https://public.tableau.com/static/images/Fo/ForeignRefugeeImmigrationtotheUnitedStates2009-2018/ForeignRefugees/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/ForeignRefugeeImmigrationtotheUnitedStates2009-2018/ForeignRefugees',
    year: '2022'
  },
  {
    name: 'Pokemon Metrics',
    description:
      'I grew up with Pokemon and now my kids like Pokemon too, so this was an opportunity to use some fun data with a business-style design. I made use of set actions and collapsible containers. There\'s an opportunity to use parameter actions with the metrics, however I\'ve found that parameter action performance is worse than a simple dropdown, which also has improved discoverability.',
    stack: ['Tableau', 'Dashboard', 'Business-Style'],
    image: 'https://public.tableau.com/static/images/Po/PokemonInc_/1_PokemonComparison2/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/PokemonInc_/1_PokemonComparison2',
    year: '2022'
  },
  {
    name: 'Comparing Designs',
    description:
      'The design of a dashboard can greatly affect it\'s readbility and usability. This dashboard provides a contrast of two designs. On the left, color and light borders are used to differentiate and identify relationships between entities. For example, The Number of Facilities KPI is in the same card as the Growth by Year, indicating a relationship. Using a card design format for visualizations also aligns with common Web UI design best practices. On the right, it\'s difficult to identify the relationship between different visualizations.',
    stack: ['Tableau', 'Dashboard', 'Informative'],
    image: 'https://public.tableau.com/static/images/Co/ComparingDashboardDesigns/Comparison/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/ComparingDashboardDesigns/Comparison',
    year: '2022'
  },
  {
    name: 'Viz for Social Good',
    description:
      'This was a volunteer project aimed at highlighting the accomplishments of Viz for Social Good and its top volunteers, while enabling new charitable organizations and volunteers to join.',
    stack: ['Tableau', 'Dashboard', 'Volunteer'],
    image: 'https://public.tableau.com/static/images/vf/vfsg/VFSG/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/vfsg/VFSG',
    year: '2020'
  },
  {
    name: 'Birth Defects',
    description:
      'I wanted to practice with meaningful data. It doesn\'t get much more meaningful than birth defects, which people around the world cope with each day. I\'m also always looking for ways to improve on dashboards designs. This dashboard was an opportunity to try out various techniques: dark mode, pagination, filter actions, and parameter actions.',
    stack: ['Tableau', 'Dashboard', 'Practice'],
    image: 'https://public.tableau.com/static/images/Bi/BirthDefects/Dashboard1/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/BirthDefects/Dashboard1',
    year: '2020'
  },
  {
    name: 'Customer Churn',
    description:
      'This was a project for my Master\'s degree. I engineered the features and compared three models: SVM, Logistic Regression, and Random Forest. I found Random Forest to be the optimal model. Read more details by following the link.',
    stack: ['Data Science', 'Python', 'Modeling'],
    image: 'customer_churn_preview.png',
    link: 'https://github.com/peterharmazinski/customer-churn/blob/master/machine_learning/customer_churn.ipynb',
    year: '2020'
  },
  {
    name: '2019 SUV Comparison',
    description:
      'This was another project for my Master\'s degree. I used Stories to break down the overall results and the 2 criteria. The assigned also challenged me to use chart types I normally wouldn\'t in a business setting.',
    stack: ['Tableau', 'Dashboard', 'Degree'],
    image: 'https://public.tableau.com/static/images/20/2019SUVComparison/Story1/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/2019SUVComparison/Story1',
    year: '2019'
  },
  {
    name: 'Makeover Monday 2019.42',
    description:
      'Rather than normal bars I used icons and made the colors match the color of the specific olympic medal. Using icons is something I would go on to use to help senior leaders track where employees were working during the Covid pandemic.',
    stack: ['Tableau', 'Dashboard', 'Practice'],
    image: 'https://public.tableau.com/static/images/Ma/MakeoverMonday-2019_42/Dashboard1/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/MakeoverMonday-2019_42/Dashboard1',
    year: '2019'
  },
  {
    name: 'Tour de France',
    description:
      'In this dashboard I used a popular dataset to practice using sentences with multiple visualizations to help readers better understand the insights.',
    stack: ['Tableau', 'Dashboard', 'Practice'],
    image: 'https://public.tableau.com/static/images/To/TourdeFrance_15703005468110/Dashboard1/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/TourdeFrance_15703005468110/Dashboard1',
    year: '2019'
  },
  {
    name: 'US Breweries',
    description:
      'I created this for fun and matched the colors to common beer colors. Key figures are enlarged for emphasis and to draw attention. I like to use this technique in tooltips when describing how a metric was calculated.',
    stack: ['Tableau', 'Dashboard', 'Practice'],
    image: 'https://public.tableau.com/static/images/U_/U_S_Breweries/Dashboard/4_3.png',
    link: 'https://public.tableau.com/app/profile/peter.harmazinski/viz/U_S_Breweries/Dashboard',
    year: '2019'
  },
  {
    name: 'Fandango Scores',
    description: 'An analysis of how Fandango scores changed after a critical article was published accusing its rating system of bias. Read more details by following the link.',
    stack: ['Statistics', 'Python', 'Analysis'],
    image: 'fandango_preview.png',
    link: 'https://github.com/peterharmazinski/fandango-scores/blob/master/fandango_scores.ipynb',
    year: '2019'
  },
  {
    name: 'Web Scraper',
    description: 'A web scraping project I developed during my Master\'s degree. It retrieves links from the US Census Bureau website. Read more details by following the link.',
    stack: ['Data Science', 'Python', 'Web Scrape'],
    image: 'web_scrape_preview.png',
    link: 'https://github.com/peterharmazinski/us-census-bureau-web-scraper/blob/main/c996_project.ipynb',
    year: '2019'
  },
  {
    name: 'Covid-19 Twitter Sentiment',
    description: 'This was the capstone project for my Master\'s degree. This project combines sentiment analysis and modeling.',
    stack: ['Data Science', 'Python', 'Modeling'],
    image: 'covid_twitter_sentiment_preview.png',
    link: 'https://github.com/peterharmazinski/masters-capstone/blob/main/capstone.ipynb',
    year: '2020'
  },
  {
    name: 'Starry Night',
    description: 'I\'ve always been fascinated by space. This was inspired by some digital art I saw online of the night sky. The stars appear at random so each time you load the page, you\'ll see a different night sky.',
    stack: ['Web Dev', 'Art', 'Fun'],
    image: 'starry_night_preview.png',
    link: 'https://codepen.io/peteski/pen/YQymVE',
    year: '2018'
  },
  {
    name: 'Young Knight',
    description: 'I wanted to see if I could make a picture with just HTML and CSS. At the end I decided to add a little bit of fun by making the knight "blink" using JavaScript.',
    stack: ['Web Dev', 'Art', 'Fun'],
    image: 'young_knight_preview.png',
    link: 'https://codepen.io/peteski/pen/ZeXvaO',
    year: '2018'
  },
]

const technical_skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    name: 'Data Visualization',
    description: 'I\'ve visualized data using multiple tools: Tableau, React, JavaScript, and Excel. I\'ve also designed templates and documented best practices for business dashboard development to improve team efficiency and user experience by ensuring all dashboards have a similar look and feel while allowing developer design freedom.'
  },{
    name: 'Tableau',
    description: 'I\'ve mentored others and created/maintained an internal Cigna Tableau chat to improve firmwide collaboration and idea-sharing.'
  },{
    name: 'SQL',
    description: 'I use SQL daily to prepare data and debug data sources. I break my code up into smaller pieces and comment it to ensure it\'s readable and understandable.'
  },{
    name: 'Cassandra',
    description: 'I designed Cassandra tables and queries to replace Oracle relational tables, reducing overall query time.'
  },{
    name: 'Alteryx',
    description: 'I have a certification in Alteryx and used it at Chase to transform data for Tableau consumption. It can make ETL easier to understand and maintain with a visual format. Tip: use containers and comments to help viewers understand the workflow more easily.'
  },{
    name: 'JavaScript',
    description: 'I started using vanilla JavaScript and Node.js to build Web dashboards hosted on SharePoint. Later on, I evolved those JavaScript dashboards into reusable components with React.'
  },{
    name: 'React',
    description: 'I started working with React as a Web developer with JPMorgan Markets. After that I used it to create a reusable library of dashboard components reducing development time by 50%. This portfolio is made with React.'
  },{
    name: 'Node.js',
    description: 'To improve resiliencey and maintainability I chose Node.js as the backend language for my Web dashboards. That way any new developers would only need to learn a single language.'
  },{
    name: 'HTML',
    description: 'I use semantic HTML to make my code easier to understand and improve accessibility.'
  },{
    name: 'CSS',
    description: 'I\'ve used CSS and SASS. I find styling websites fun as it satisfies my artistic side.'
  },{
    name: 'Python',
    description: 'It was easy to learn Python after I learned Java. I used Python to develop models for my Masters degree. I\'m also using Python to query REST APIs in the backend for this site which will populate future Web dashboards.'
  },{
    name: 'Java',
    description: 'Java was my first programming language. I took couple of basic Java classes in college, found a Java mentor, became certified, and obtained a Web Developer role, where I used Java object-oriented programming to migrate from Oracle data access objects to Cassandra, then make that data available through APIs.'
  },{
    name: 'Git',
    description: 'From Web development to SQL development, Git is very helpful for code reviews to ensure the team has the opportunity to understand the code, suggest improvements, and identify potential defects before they become production incidents.'
  },{
    name: 'SharePoint',
    description: 'I have extensive experience with SharePoint lists and forms. When hosting a server or database for Web dashboards was prohibitive, I used Node.js and Alteryx to store data in SharePoint lists, join that data to user input in other SharePoint lists, and a SharePoint page to display React dashboards.'
  },{
    name: 'Confluence',
    description: 'I enjoy using Confluence to document processes, debugging steps, and store Balsamiq wireframes. I\'ve seen others create complicated Confluences pages that are confusing to make changes to, so I keep pages simple with a proper heading hierarchy, table of contents, and highlighting key information.'
  }
]

const soft_skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    name: 'Leadership',
    description: 'Leadership can be upwards, sideways, or downwards. I lead in all directions by doing my work well, making helpful recommendations to my leadership and peers, and helping everyone I can.'
  },{
    name: 'Requirements Gathering',
    description: 'I work closely with stakeholders to identify user needs.'
  },{
    name: 'Continuous Improvement',
    description: 'I\'m always looking for ways to improve processes and improve myself. The more I learn, the more opportunities I have to help others.'
  },{
    name: 'Training',
    description: 'I enjoy training others and sharing what I\'ve learned. I\'ve trained team members in requirements gathering, Tableau development, dashboard design, debugging, report maintenance, and Web development.'
  },{
    name: 'Mentoring',
    description: 'I enjoy mentoring others. I\'ve helped several people change careers and get into analytics and Web development.'
  },{
    name: 'Critical Thinking',
    description: 'I use critical thinking on a daily basis for everything from designing efficient SQL to assessing stakeholder needs to creating intake forms that encourage the best user input possible.'
  },{
    name: 'Design Thinking',
    description: 'Dashboards are not one size fits all. Dashboards should be designed to be reusable by multiple teams but also designed to empower users to take specific actions based on the data. Finding this balance makes a dashboard more effective.'
  },{
    name: 'Resourceful',
    description: 'I am always looking for ways to overcome obstacles that inhibit work. When I needed to spend hours manually maintaining VBA reports that were error prone, Tableau and server hosting was too expensive. So I developed Web dashboards, hosted on a SharePoint page, with a Node.js ETL workflow.'
  },{
    name: 'Humorous',
    description: 'I\'ve found that tasteful humor brings people together, lighten moods, and creates a positive atmosphere. This is especially essential when working remote where it can be more difficult to make a connection and people may not be upfront about expressing their feelings.'
  },{
    name: 'Teamwork',
    description: 'I work with my teammates on a daily basis to help them and ask their help in improving my work. Silos don\'t help anyone, so we should engage with others to produce the greatest product possible.'
  },{
    name: 'Empathy',
    description: 'Empathy drives me to provide a great experience for stakeholders and users.'
  },{
    name: 'Strategic Planning',
    description: 'I plan strategically by breaking problems down into smaller pieces, consulting with team members, and identifying the resources that should own the work. From dashboard development to capacity planning to database migration, small- and large-scale work can be made more successful by identifying logical work units.'
  },{
    name: 'Building Relationships',
    description: 'I always strive to build relationships by helping the people around me. I\'ve often found people refer others to me for help with their technology needs.'
  }
]

export { header, about, projects, technical_skills, soft_skills }
