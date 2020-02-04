import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const useStyles = makeStyles({
    root: {
        width: 340,
    },
    MenuList:{
        marginBottom:6,
    },
    MenuItem:{
        marginBottom:6,

    },
});

export default function TypographyMenu() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <Typography variant="inherit">Log Out</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PriorityHighIcon />
                    </ListItemIcon>
                    <Typography variant="inherit">Edit Profile</Typography>
                </MenuItem>
            </MenuList>
            <hr/>
            <MenuList>
            <MenuItem>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <Typography variant="inherit" noWrap>
                    A very long text that overflows
                </Typography>
            </MenuItem>
            </MenuList>
        </Paper>
    );
}
