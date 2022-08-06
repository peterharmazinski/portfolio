import uniqid from 'uniqid'
import Card from '@mui/material/Card';
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'
import { Button, CardContent, CardMedia, Chip, Collapse, Link, Typography } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';

const ProjectContainer = ({ project}) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className='project' sx={{boxShadow: 3, bgcolor: 'background.secondary'}}>
    { project.image && <a
        href={project.link}
        aria-label='live preview'><CardMedia
        component="img"
        height="200"
        image={project.image}
        //image='{require(`../../${project.image}`)}'
        alt="dashboard small image"
      />
      </a>
    }
    <CardContent>
      <Link sx={{textDecoration: 'none', color: 'text.default'}} href={project.link}>
        <Typography component='h3' variant='h5' style={{margin: '20px 0 0 0'}} >{project.name}</Typography>
      </Link>
      <Collapse variant='p' in={open} collapsedSize={65}>
        <p className='project__description'>{project.description}</p>                        
      </Collapse>
      { !open ? <Button onClick={() => setOpen(state => !open)}>Read More</Button> 
        : <Button onClick={() => setOpen(state => !open)}>Read Less</Button> 
      }
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              <Chip label={item}></Chip>
            </li>
          ))}
        </ul>
      )}
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        {project.link && (
        <a
          href={project.link}
          aria-label='live preview'
          className='link link--icon'
          style={{display: 'inherit', textAlign: 'left'}}
        >
          <LaunchIcon />
        </a>
        )}
        <Typography >{project.year}</Typography>
      </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectContainer
