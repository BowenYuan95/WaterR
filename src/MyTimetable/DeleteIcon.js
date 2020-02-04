import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';


import IconButton from '@material-ui/core/IconButton';







const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(0),
    },
    icon:{
        marginLeft: '0',
        marginTop:'0',
    },
    input: {
        display: 'none',
    },
}));





export default function IconButtons() {
    const classes = useStyles();


    return (
        <div>

            <IconButton
                className={classes.button}
                aria-label="back"
                component="span"
                size="medium"
                variant="round"

            >
                <a href="#/newEvent"><HighlightOffSharpIcon /></a>
            </IconButton>

            {/*<ScheduleIcon*/}
            {/*    className={classes.icon}*/}
            {/*    size="medium"*/}


            {/*/>*/}


        </div>
    );
}
