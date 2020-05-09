import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import AddToShoppingCard from '../../../mainComponents/AddToShoppingCard/AddToShoppingCard';
import AddOrRemoveFromShCard from '../../../mainComponents/AddOrRemove/AddOrRemoveFromShCard';
import { Divider } from '@material-ui/core';
import Label from '../../../mainComponents/label/label';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 6,
    height: 105,
    borderRadius: 15,
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
  },
  weight: {
    fontSize: 13,
    color: '#9A9A9A'
  },
  ratingcomp: {
    marginLeft: 20
  },
  price: {
    fontSize: 13,
    color: '#36CE91',
    marginTop: 10
  },
  addOrRemove: {
    marginRight: 30
  },
  priceAfterOff: {
    fontSize: 13,
    color: '#36CE91',
    marginTop: 0,
    fontWeight: 600
  },
  offAmount: {
    fontSize: 11,
    color: '#E2574C',
    textDecoration: 'line-through',
    fontWeight: 600
  },
  data : {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  dataShop : {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0
  },
  priceOff : {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginTop: 5
  },
  
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: "100%",
    padding: "10px 16px"
  },
  cover: {
    maxWidth: 100,
    width: 100
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  label: {
    left: 20,
    position: 'absolute'
  },
  
}));

export default function SingleProduct(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
      

    <Card className={classes.root}>
    <div className={classes.label}>
    <Label discount="25%" className={classes.labelText}/>

    </div>
    <CardMedia
        className={classes.cover}
        image="/assets/logo.png"
        title={props.product.title}
      />
     
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <span className={classes.name}>
            {props.product.title}
          </span>
          <div className={classes.data}>
          <span className={classes.weight}>
            500 {props.product.unit === 'KILO' ? 'کیلوگرم' : 'گرم'}
          </span>
          </div>
          <Divider variant="light"/>
          <div className={classes.dataShop}>
          <div className={classes.priceOff}>
          <span className={!props.product.off ? classes.price : classes.priceAfterOff}>
            12000تومان
          </span>
          {
            props.product.off ?
            <span className={classes.offAmount}>12000تومان</span>
            : ''
          }
          </div>
          <AddToShoppingCard/>
          {/* { 
            !props.product.number > 0 ?
            <AddToShoppingCard/>
            : <div className={classes.addOrRemove}>
              <AddOrRemoveFromShCard number={props.product.number}/>
            </div>
          } */}
          </div>
        </CardContent>
        
      </div>
      
    </Card>
  );
}