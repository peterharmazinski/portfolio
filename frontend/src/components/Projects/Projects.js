import { Grid, Typography } from '@mui/material'
import uniqid from 'uniqid'
import { projects } from '../../config'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <Typography variant='h2' className='section__title'>Projects</Typography>
      <Grid className='projects__grid'>
        {projects.sort((a, b) => b.year - a.year).map((project) => ( // newer projects should be displayed first
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </Grid>
    </section>
  )
}

export default Projects
