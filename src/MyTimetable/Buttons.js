import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/ArrowBackIos';
import ScheduleIcon from "@material-ui/icons/EventNote";






const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    icon:{
        marginLeft: '30%',
        marginTop:'5%',
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
                size="small"
                variant="round"

            >
                <a href="#/detail"><KeyboardArrowLeft /></a>
            </IconButton>

            {/*<ScheduleIcon*/}
            {/*    className={classes.icon}*/}
            {/*    size="medium"*/}


            {/*/>*/}


        </div>
);
}
