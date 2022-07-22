import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import { about } from '../../config';
import Resume from '../../Resume-Web.pdf';
import ProfilePicture from '../../profile_picture.jpg';
import './About.css';
import { IconButton, Typography } from '@mui/material';

const About = () => {

  const { name, role, description, resume, social } = about

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '90%',
    display: 'block',
    p: 4,
  };

  return (
    <div className='about' style={{padding: '200px 0 0 0'}}>
      <div className='div1'>
      {name && (
        <Typography variant='h1' className='center' style={{ whiteSpace: 'pre' }}>
          Hi, I'm <Typography className='about__name center' component='span' color='primary' style={{fontSize: 'inherit'}}>{name}</Typography>
        </Typography>
      )}

      {role && <Typography variant='h2' className='about__role' style={{textAlign: 'left'}}>{role}</Typography>}
      <Typography className='about__desc' style={{margin: '25px 0 0 0'}}>{description && description}</Typography>
      <div className='about__contact'>
        {resume && (
          <Button onClick={handleOpen} color='primary' variant='contained' type='button' className='link--icon'>
            Resume
          </Button>
        )}

        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <iframe src={Resume} width='100%' height='100%' frameborder="0"></iframe>
          </Box>
        </Modal>

        <a href={social.tableau} aria-label='tableau' className='link link--icon'>
          <IconButton>
            <SvgIcon viewBox="0 0 31 31">
              <path d="M15.536 0.235v2.937h-2.624v0.771h2.624v2.937h0.933v-2.937h2.624v-0.771h-2.624v-2.937zM23.579 3.251v4.328h-3.943v1.233h3.943v4.251h1.391l0.009-2.109 0.032-2.099 1.953-0.032 1.943-0.011v-1.233h-3.937v-4.328zM7.036 3.328v4.256h-3.984v1.228h3.984v4.256h1.313v-4.256h4.015v-1.233h-4.015v-4.251zM15.151 10.355v4.791h-4.405v1.584h4.405v4.797h1.709v-4.797h4.411v-1.584h-4.411v-4.791zM28.115 12.421v2.959h-2.688v1.084h2.688v3.015h1.183v-3.015h2.703v-1.084h-2.703v-2.959zM2.631 12.593v2.901h-2.631v0.828h2.631v2.928h0.891v-2.928h2.667v-0.828h-2.709v-2.901zM23.579 18.62v4.339h-4.027v1.235h4.027v4.285h1.427v-4.285h3.979v-1.235h-3.979v-4.339zM6.959 18.631v4.328h-3.943v1.235h3.943v4.255h1.468v-4.255h3.937v-1.235h-3.937v-4.333h-0.733zM15.38 24.735v2.937h-2.625v1.077h2.625v3.016h1.24l0.016-1.489 0.020-1.527h2.631v-1.077h-2.667v-2.937z" />
            </SvgIcon>
          </IconButton>
        </a>
        {social && (
          <>
            {social.github && (
              <a href={social.github} aria-label='github' className='link link--icon'>
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </a>
            )}

            {social.linkedin && (
              <a href={social.linkedin} aria-label='linkedin' className='link link--icon'>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </a>
            )}
          </>
        )}
      </div>
      </div>
      <div className='div2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <Avatar alt="Peter Harmazinski" src={ProfilePicture} sx={{ boxShadow: 3 }} style={{ height: '350px', width: '350px' }} />
      </div>
    </div>
  )
}

export default About
