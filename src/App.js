import React from 'react';

import './App.css';
import 'typeface-roboto';

import Background from './MyTimetable/Background';
import IconButton from './MyTimetable/Buttons';

import Box from '@material-ui/core/Box';
import  './MyTimetable/style.css';
import Login from './MyTimetable/Login';


function App() {
  return (
      <div>
          <IconButton/>
          {/*<Box ml={"20%"} mt={"25%"}>*/}
          <Login/>
          {/*</Box >*/}
          <Background />


          {/*<Box  mt="35%" ml="13%" mr="13%" id="calendar">*/}
          {/*<Card />*/}
          {/*</Box>*/}
          <Box >
              {/*<BottomNav />*/}
          </Box>
      </div>


  );
}

export default App;
