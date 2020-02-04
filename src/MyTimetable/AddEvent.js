import React,{ Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        width: 200,
    },
    form:{
        marginTop:"30%",
    },
    button:{
        marginTop:"5%",
        marginLeft:"60%",
    },
    tittle:{
        marginLeft: theme.spacing(8),
    }

}));

export default function DateAndTimePickers() {
    const classes = useStyles();

    return (


        <form className={classes.container} noValidate className={classes.form} onSubmit={this.onSubmit.bind(this)}>
            <h1 className={classes.tittle}>Add New Mission</h1>
            <TextField
                id="date"
                label="Date"
                type="text"
                defaultValue="yyyy-mm-dd"
                className={classes.textField}
                onChange={this.onChange.bind(this)}
                InputLabelProps={{
                    shrink: true,
                }}

            />
            <TextField
                label="SurveyRunCode"
                id="SurveyRunCode"
                defaultValue="12345"
                className={classes.textField}
                onChange={this.onChange.bind(this.valueOf())}
                margin="dense"

            />

            <TextField
                label="Staff"
                id="staff"
                defaultValue="John Smith"
                className={classes.textField}
                onChange={this.onChange.bind(this)}
                margin="dense"

            />
            <TextField
                label=" Staffinitial"
                id="staff"
                defaultValue="JS"
                className={classes.textField}
                onChange={this.onChange.bind(this)}
                margin="dense"

            />

            <TextField
                label="Vehicle"
                id="vehicle"
                defaultValue="Vehicle"
                className={classes.textField}
                onChange={this.onChange.bind(this)}
                margin="dense"

            />
            <TextField
                label="Vessel"
                id="vessel"
                defaultValue="Box"
                className={classes.textField}
                onChange={this.onChange.bind(this)}
                margin="dense"

            />


            <Button variant="contained" className={classes.button} type="submit">
                <a href="#/detailNew">Confirm</a>
            </Button>
        </form>

    );

}
