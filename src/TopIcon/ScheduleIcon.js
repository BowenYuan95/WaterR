import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ScheduleIcon from "@material-ui/icons/EventNote";

const useStyles = makeStyles(theme => ({
    icon:{
        marginLeft: '25%',
        marginTop:'5%',
    },

}));
export default function ScheduleIcon() {
    const classes = useStyles();


    return (
        <div> <ScheduleIcon
            className={classes.icon}
            size="medium"


        />


        </div>
    );
}
