import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SvgIcon from '@mui/material/SvgIcon';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { about } from '../../config';
import ProfilePicture from '../../profile_picture.jpg';
import './About.css';
import { Typography } from '@mui/material';

const About = ({modalOpen, toggleModal}) => {

  const { name, role, description, resume, social } = about

  return (
    <div className='about' style={{padding: '5vw 0 0 0'}}>
      <div className='div1'>
      {name && (
        <Typography variant='h1' className='center hero parent' style={{ whiteSpace: 'pre' }}>
          <span className='div3'>Hi, I'm&nbsp;</span>
          <Typography className='about__name div4' component='span' color='primary' style={{fontSize: 'inherit'}}>Peter&nbsp;</Typography>
          <Typography className='about__name div5' component='span' color='primary' style={{fontSize: 'inherit'}}>Harmazinski</Typography>
          <Avatar id='hero-image-small' className='div6' alt='Peter Harmazinski' src={ProfilePicture} sx={{ boxShadow: 3 }} style={{ height: 'calc(40px + 10vw)', width: 'calc(40px + 10vw)' , margin: '0 15px 0 5px'}} />
        </Typography>
      )}

      {role && <Typography variant='h2' className='about__role' style={{textAlign: 'left'}}>{role}</Typography>}
      <Typography className='about__desc' style={{margin: '25px 0 0 0'}} dangerouslySetInnerHTML={{__html: description}}></Typography>
      <div className='about__contact'>

        <Button startIcon={<LinkedInIcon/>} variant='contained' href={social.linkedin} aria-label='linkedin' className='link--icon about--primary-icon'>
          <span className='about--primary-text'>Connect&nbsp;<span className='about--secondary-text'> on LinkedIn</span></span>
        </Button>

        <Button startIcon={<PictureAsPdfIcon />} onClick={() => toggleModal()} variant='outlined' type='button' className='link--icon about--secondary-icon'>
          <span className='about--secondary-text'>Resume</span>
        </Button>

        <Button variant='outlined' href={social.tableau} aria-label='tableau' className='link--icon about--secondary-icon'
          startIcon={<SvgIcon viewBox='0 0 31 31'>
                      <path d='M15.536 0.235v2.937h-2.624v0.771h2.624v2.937h0.933v-2.937h2.624v-0.771h-2.624v-2.937zM23.579 3.251v4.328h-3.943v1.233h3.943v4.251h1.391l0.009-2.109 0.032-2.099 1.953-0.032 1.943-0.011v-1.233h-3.937v-4.328zM7.036 3.328v4.256h-3.984v1.228h3.984v4.256h1.313v-4.256h4.015v-1.233h-4.015v-4.251zM15.151 10.355v4.791h-4.405v1.584h4.405v4.797h1.709v-4.797h4.411v-1.584h-4.411v-4.791zM28.115 12.421v2.959h-2.688v1.084h2.688v3.015h1.183v-3.015h2.703v-1.084h-2.703v-2.959zM2.631 12.593v2.901h-2.631v0.828h2.631v2.928h0.891v-2.928h2.667v-0.828h-2.709v-2.901zM23.579 18.62v4.339h-4.027v1.235h4.027v4.285h1.427v-4.285h3.979v-1.235h-3.979v-4.339zM6.959 18.631v4.328h-3.943v1.235h3.943v4.255h1.468v-4.255h3.937v-1.235h-3.937v-4.333h-0.733zM15.38 24.735v2.937h-2.625v1.077h2.625v3.016h1.24l0.016-1.489 0.020-1.527h2.631v-1.077h-2.667v-2.937z' />
                    </SvgIcon>}>
          <span className='about--secondary-text'>Tableau</span>
        </Button>

        {social && (
          <>
            {social.github && (
              <Button startIcon={<GitHubIcon/>} variant='outlined' href={social.github} aria-label='github' className='link--icon about--secondary-icon' >
                <span className='about--secondary-text'>Github</span>
              </Button>
            )}

            
          </>
        )}
      </div>
      </div>
      <div className='div2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <Avatar id='hero-image' alt='Peter Harmazinski' src={ProfilePicture} sx={{ boxShadow: 3 }} style={{ height: 'calc(100px + 15vw)', width: 'calc(100px + 15vw)', marginRight: '200px' }} />
      </div>
    </div>
  )
}

export default About
