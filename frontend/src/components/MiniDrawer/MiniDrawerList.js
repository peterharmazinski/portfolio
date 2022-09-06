import {useContext } from 'react'
import MiniDrawerListItem from './MiniDrawerListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import WorkIcon from '@mui/icons-material/Work';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SvgIcon from '@mui/material/SvgIcon';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Avatar, IconButton, ListItem } from '@mui/material';
import ProfilePicture from '../../profile_picture.jpg';
import { about } from '../../config';
import { ColorModeContext } from '../../contexts/theme';
import { useTheme } from '@mui/material/styles';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import MiniProfileIcon from './MiniProfileIcon';
import ToggleColorIcon from './ToggleColorIcon';

export default function MiniDrawerList({toggleModal}) {
    

    return (
        <>
            <List>
                <MiniProfileIcon/>
                <MiniDrawerListItem text='Projects' href='#projects' open='open' >
                    <WorkIcon />
                </MiniDrawerListItem>
                <MiniDrawerListItem text='Skills' href='#skills' open='open' >
                    <SportsMartialArtsIcon />
                </MiniDrawerListItem>
            </List>
            <Divider sx={{backgroundColor: 'lightgray'}}/>
            <List>
                <MiniDrawerListItem text='LinkedIn' href='/' externalHref={about.social.linkedin} open='open' >
                    <LinkedInIcon />
                </MiniDrawerListItem>
                <MiniDrawerListItem text='Resume' href='/' open='open' onClick={toggleModal} >
                    <PictureAsPdfIcon />
                </MiniDrawerListItem>
                <MiniDrawerListItem text='Tableau' href={about.social.tableau} open='open' >
                    <SvgIcon viewBox='0 0 31 31'>
                        <path d='M15.536 0.235v2.937h-2.624v0.771h2.624v2.937h0.933v-2.937h2.624v-0.771h-2.624v-2.937zM23.579 3.251v4.328h-3.943v1.233h3.943v4.251h1.391l0.009-2.109 0.032-2.099 1.953-0.032 1.943-0.011v-1.233h-3.937v-4.328zM7.036 3.328v4.256h-3.984v1.228h3.984v4.256h1.313v-4.256h4.015v-1.233h-4.015v-4.251zM15.151 10.355v4.791h-4.405v1.584h4.405v4.797h1.709v-4.797h4.411v-1.584h-4.411v-4.791zM28.115 12.421v2.959h-2.688v1.084h2.688v3.015h1.183v-3.015h2.703v-1.084h-2.703v-2.959zM2.631 12.593v2.901h-2.631v0.828h2.631v2.928h0.891v-2.928h2.667v-0.828h-2.709v-2.901zM23.579 18.62v4.339h-4.027v1.235h4.027v4.285h1.427v-4.285h3.979v-1.235h-3.979v-4.339zM6.959 18.631v4.328h-3.943v1.235h3.943v4.255h1.468v-4.255h3.937v-1.235h-3.937v-4.333h-0.733zM15.38 24.735v2.937h-2.625v1.077h2.625v3.016h1.24l0.016-1.489 0.020-1.527h2.631v-1.077h-2.667v-2.937z' />
                    </SvgIcon>
                </MiniDrawerListItem>
                <MiniDrawerListItem text='GitHub' href={about.social.github} open='open' >
                    <GitHubIcon />
                </MiniDrawerListItem>
            </List>
            <Divider sx={{backgroundColor: 'lightgray'}}/>
            <List>
                <ToggleColorIcon/>
            </List>
        </>
    );
}