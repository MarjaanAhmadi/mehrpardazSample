import React from 'react';
import {  makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles ({
  root: {
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center'
  },
    gButton: {
      width: "100%",
      borderRadius: 15,
      border: "#2C7BE5",
      height: 40,
      fontFamily: 'IranSans',
      backgroundColor: '#2C7BE5',
      color: 'white'
    },
  });
const MyOrders = () => {
    const classes = useStyles();
    return(
           <div className={classes.root}>
              <Button variant="contained" className={classes.gButton}>
               سفارشات من
              </Button>
           </div>
    )
}
export default MyOrders;