import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './Footer.css'
import { about } from '../../config'

const Footer = () => {
  const { social } = about;
  return (
    <footer className='footer'>
        You're not scraping the bottom of the barrel, but you have reached the bottom of the page. Thanks for taking a look at my portfolio! 
        <br/>
        Connect with me on LinkedIn
        <IconButton  href={social.linkedin} aria-label='linkedin' className='link--icon'>
          <LinkedInIcon/>
        </IconButton>
    </footer>
)}

export default Footer
