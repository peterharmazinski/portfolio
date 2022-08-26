import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { HashLink } from 'react-router-hash-link';

const MiniDrawerListItem = ({text, href, children, open, onClick, externalHref}) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
        <HashLink to={href}>
        <ListItemButton
        onClick={onClick}
        href={externalHref}
        sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
        }}
        >
        <ListItemIcon
            sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
            }}
        >
            {children}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
        </HashLink>
    </ListItem>
)

export default MiniDrawerListItem
