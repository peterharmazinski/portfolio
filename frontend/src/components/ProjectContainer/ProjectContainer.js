import uniqid from 'uniqid'
import Card from '@mui/material/Card';
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { Link } from "react-router-dom";
import './ProjectContainer.css'
import { CardMedia, Typography } from '@mui/material';

const ProjectContainer = ({ project}) => (
  <a href={project.link}>
    <Card className='project' sx={{boxShadow: 3, bgcolor: 'background.secondary'}}>
    { project.image && <CardMedia
        component="img"
        height="140"
        image={require(`../../${project.image}`)}
        alt="dashboard small image"
      />
    }
      <Typography variant='h3' style={{margin: '20px 0 0 0'}} >{project.name}</Typography>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </Card>
  </a>
)

export default ProjectContainer
