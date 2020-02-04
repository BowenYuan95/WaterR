import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function ButtonControl() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" className={classes.button}>
                <a href="#/newEvent">create</a>
            </Button>

            <Button variant="contained" color="primary" className={classes.button}>
                <a href="#/delete">Delete</a>
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
                <a href="#/update">Update</a>
            </Button>


        </div>
    );
}
