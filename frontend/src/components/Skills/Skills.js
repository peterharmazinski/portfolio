import { Box, Card, Grid, List, ListItem, Popover, Typography } from '@mui/material'
import { useState } from 'react'
import uniqid from 'uniqid'
import { Skill } from './Skill'
import './Skills.css'

const Skills = (props) => {
  
  if (!props.skills.length) return null
  
  return (
    <Box variant='section' id={props.title.toLowerCase() + '-skills'}>
      <Typography variant='h3' sx={{textAlign: 'center', marginBottom: '.5em'}}>{props.title}</Typography>
      <Grid className='skills__list'>
        {props.skills.map((skill) => (
          <Skill skill={skill}/>
        ))}
      </Grid>
    </Box>
  )
}

export default Skills
