import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { technical_skills, soft_skills } from './config'
import './App.css'
import { Box, Container, Paper, Typography } from '@mui/material'

const App = () => {
  
  return (
    <Paper id='top' className={`app`} sx={{bgcolor: 'background.default'}}>
      <Header />

      <main>    
        <About />
        <Projects />
        <section className='section skills'>
          <Typography variant='h2' className='section__title'>Skills</Typography>
          <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <Skills title={'Technical'} skills={technical_skills}/>
            <Skills title={'Soft'} skills={soft_skills}/>
          </Container>
        </section>
      </main>
      <Footer/>
      <ScrollToTop />
    </Paper>
  )
}

export default App
