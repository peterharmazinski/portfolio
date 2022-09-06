import React, { useEffect, useState } from 'react'
import { Avatar, Box, IconButton } from '@mui/material'
import MiniDrawerListItem from './MiniDrawerListItem'
import ProfilePicture from '../../profile_picture.jpg';

const MiniProfileIcon = () => {
  const [isVisible, setIsVisible] = useState(() => window.pageYOffset > 500 ? true : false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

      window.addEventListener('scroll', toggleVisibility)
      return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <MiniDrawerListItem text='Home' href='#' open='open' >
        <Avatar alt='Peter Harmazinski' src={ProfilePicture} style={{ height: '24px', width: '24px' }} />
    </MiniDrawerListItem>
  ) : null
}

export default MiniProfileIcon
