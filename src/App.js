import React, { useContext } from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Components/Login';
import VideoPlayer from './Components/VideoPlayer';
import Sidebar from './Components/Sidebar';
import Notifications from './Components/Notifications';
import { UserProvider } from './userContext';
import { SocketContext } from './Context';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));


const App = () => {
  const {userLoggedIn} = useContext(SocketContext);

  const classes = useStyles();

  return (<>
    <UserProvider>
{
  userLoggedIn ? 
 
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">Video Chat</Typography>
        </AppBar>
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
   
  :  <div className={classes.wrapper}>
    <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
    <Login/>
      </div>
      
}
    </UserProvider>
  
  
  </>)
  

};

export default App;
