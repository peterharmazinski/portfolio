import { Box, Card, Grid, List, ListItem, Popover, Typography } from '@mui/material'
import { useState } from 'react'
import uniqid from 'uniqid'
import { Skill } from './Skill'
import './Skills.css'

const Skills = ({skills, title, bgcolor}) => {
  
  if (!skills.length) return null
  
  return (
    <>
        {skills.map((skill) => (
          <Skill skill={skill} bgcolor={bgcolor}/>
        ))}
    </>
  )
}

export default Skills
