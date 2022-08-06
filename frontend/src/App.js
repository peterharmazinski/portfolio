import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { technical_skills, soft_skills } from './config'
import './App.css'
import { Box, Container, Grid, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useState } from 'react'

const App = () => {
  const [alignment, setAlignment] = useState(['technical', 'soft']);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Paper id='top' className={`app`} sx={{bgcolor: 'background.default'}}>
      <Header />

      <main>    
        <About />
        <Projects />
        <section className='section skills' id='skills' style={{minHeight: '100vh'}}>
          <Typography variant='h2' className='section__title'>Skills</Typography>
          <ToggleButtonGroup
            value={alignment}
            onChange={handleChange}
            sx={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}
          >
            <ToggleButton color='primary' value='technical' sx={{width: '125px'}}>Technical</ToggleButton>
            <ToggleButton color='secondary' value='soft' sx={{width: '125px'}}>Soft</ToggleButton>
          </ToggleButtonGroup>
          <Container sx={{display: 'flex', justifyContent: 'center'}}>
          <Grid className='skills__list'>
            { alignment.includes('technical') && (
              <Skills title={'Technical'} skills={technical_skills} bgcolor='rgba(25, 118, 210, 0.12)'/>
            )}
            { alignment.includes('soft') && (
              <Skills title={'Soft'} skills={soft_skills}  bgcolor='rgba(156, 39, 176, 0.12)'/>
            )}
            </Grid>
          </Container>
        </section>
      </main>
      <Footer/>
      <ScrollToTop />
    </Paper>
  )
}

export default App
