import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ScheduleIcon from "@material-ui/icons/Assignment";
import NotificationIcon from "@material-ui/icons/NotificationImportant";
import AccountIcon from "@material-ui/icons/PermIdentity";
import TimetableIcon from "@material-ui/icons/EventNote";
import SearchIcon from "@material-ui/icons/Search";
import { red } from "@material-ui/core/colors";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";


import SnackbarContent from '@material-ui/core/SnackbarContent';
import  './style.css';
import { ThemeProvider } from '@material-ui/styles';

import Calendar from "./Calendar";
import MySchedule from "./Schedule";
import IconButton from './Buttons';

import ButtonControl from './ButtonControl';


import NewEvent from "./NewEvent";
import DeleteIcon from "./DeleteIcon";




const useStyles = makeStyles({
    root: {
        width: 375
    },
    BottomNavigation: {
        color: red
    },
    snackbar: {
        // [theme.breakpoints.down('xs')]: {
        //     bottom: 90,
        // },
        bottom:"50%",
        color:red,
        marginBottom:8,
        fontSize:16,

    },
    });

const action = (
    <Button color="default" size="medium">
        <a href="#/">...</a>
    </Button>
);

const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
          MuiSnackbarContent: {
            // Name of the rule
            root:{
               color:'black',
                backgroundColor:'white',        // Some CSS
                padding:"2px 16px",
            },
            // icon:{
            //     width: "1rem",
            //     height: "1rem",
            //     display: "inline-block",
            //     fontSize: "1.5rem",
            // }
        },
    },
});


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        "aria-controls": `action-tabpanel-${index}`
    };
}

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }



    return (

        <Box color="text.secondary">
            <Box ml="2%" mt="2%">
            <IconButton/>
            </Box>
            <SwipeableViews
                // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} >
                    {/*<Box position="fixed"  alignContent="flex-start" top={0} left="45%" right="45%">*/}
                    {/*    <ScheduleIcon/>*/}
                    {/*</Box>*/}
                    <Box ml="2%" mr="10%"  top={0} position="fixed">
                        {/*<a href="#/newEvent"><AddIcon/></a>*/}
                        {/*<DeleteIcon/><NewEvent/>*/}
                        {/*<button class="btnControl"><a href="/newEvent">Create</a></button>*/}
                        {/*<button class="btnControl"><a href="#/deleteEvent">Delete</a></button>*/}
                        {/*<button class="btnControl"><a href="#/updateEvent">Update</a></button>*/}
                        <ButtonControl/>

                    </Box>

                    <Box mb="0%" ml="2.5%" mr="2.5%" mt="10%">
                        {/*<Schedule/>*/}
                        <Calendar/>

                    </Box>

                </TabPanel>
                <TabPanel value={value} index={1} >
                    <Box ml="40%" mr="45%" top={0} position="fixed" >
                        <TimetableIcon/>
                    </Box>
                    <Box mb="0%" ml="2.5%" mr="2.5%" mt="10%">
                         {/*<Card/>*/}
                         <MySchedule/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box ml="40%" mr="45%" top={0} position="fixed" >
                        <NotificationIcon/>



                    </Box>
                    <Box ml="80%" mr="10%" top={0} position="fixed" >
                        <SearchIcon/>
                    </Box>


                    <h3><strong>New</strong></h3>
                        <SnackbarContent  className={classes.snackbar} message="JG add a new mission." action={action} />
                        <ThemeProvider theme={theme}>
                        <SnackbarContent
                            icon={<AccountIcon />}
                            className={classes.snackbar}
                            message={
                                'Apple add a new mission.'
                            }
                            action={action}
                        />
                        </ThemeProvider>
                    <h3><strong>Earlier</strong></h3>
                        <SnackbarContent
                            className={classes.snackbar}
                            message="Lily add a new mission."
                            action={action}
                        />
                        <SnackbarContent
                            className={classes.snackbar}
                            message={
                                'HG add a new mission.'
                            }
                            action={action}
                        />

                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Box ml="40%" mr="45%" top={0} position="fixed" >
                        <AccountIcon/>
                    </Box>
                    <br/>
                    {/*<AccountMenu />*/}
                    <SnackbarContent  className={classes.snackbar} message="Log Out" action={action} />
                    <ThemeProvider theme={theme}>
                        <SnackbarContent
                            icon={<AccountIcon />}
                            className={classes.snackbar}
                            message={
                                'Edit Profile'
                            }
                        />
                    </ThemeProvider>
                    <h4><strong><b>Notification<hr/></b></strong></h4>

                    <SnackbarContent
                        className={classes.snackbar}
                        message="Allow Notification"
                        action={action}
                    />

                    <SnackbarContent
                        className={classes.snackbar}
                        message={
                            'Email'
                        }
                        action={action}
                    />

                    <SnackbarContent
                        className={classes.snackbar}
                        message={
                            'Sounds'
                        }
                        action={action}
                    />
                    <SnackbarContent
                        className={classes.snackbar}
                        message={
                            'Badge App Icon'
                        }
                        action={action}
                    />
                    <SnackbarContent
                        className={classes.snackbar}
                        message={
                            '15 min Alert'
                        }
                        action={action}
                    />
                </TabPanel>

            </SwipeableViews>
            <Box position="fixed"  alignContent="flex-end" bottom={0}>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="Schedule"
                icon={<ScheduleIcon />}
                color="secondary"
                {...a11yProps(0)}
            />

            <BottomNavigationAction
                label="Timetable"
                icon={<TimetableIcon />}
                href=""
                {...a11yProps(1)}
                // className="MuiSvgIcon-colorError"
            />

            <BottomNavigationAction label="Notification" icon={<NotificationIcon />}
                                    {...a11yProps(2)}/>
            <BottomNavigationAction label="Account" icon={<AccountIcon />}
                                    {...a11yProps(3)}/>
        </BottomNavigation>
            </Box>

        </Box>

    );
}
