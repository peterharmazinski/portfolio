import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import './ScrollToTop.css'
import { HashLink } from 'react-router-hash-link'
import { Box, IconButton } from '@mui/material'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <Box className='scroll-top'>
      <IconButton>
      <HashLink
        to='#top'
        className='link link--nav'
      >
        <ArrowUpwardIcon fontSize='large' color='primary' />
      </HashLink>
      </IconButton>
    </Box>
  ) : null
}

export default ScrollToTop
