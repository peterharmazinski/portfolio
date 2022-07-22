import { Card, Grid, List, ListItem, Popover, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import uniqid from 'uniqid'

export const Skill = ({skill}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const cardRef = useRef();
    const open = Boolean(anchorEl);

    const handlePopoverOpen = (event) => {
        setAnchorEl(cardRef.current);
    };
    
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    
    

    return <>
    <Card 
        ref={cardRef}
        key={skill.name} 
        className='skills__list-item btn btn--plain' 
        sx={{boxShadow: 1, bgcolor: 'background.secondary'}}
        aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
    >
        {skill.name}
    </Card>
    <Popover
        id={`mouse-over-popover-${skill.name}`}
        sx={{
        pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
  >
    <Typography sx={{ p: 1, maxWidth: '300px' }}>{skill.description}</Typography>
  </Popover>
  </>
}