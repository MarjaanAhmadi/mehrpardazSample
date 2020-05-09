import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Divider, Link } from '@material-ui/core';
import AddToShoppingCard from '../AddToShoppingCard/AddToShoppingCard';
import AddOrRemoveFromShCard from '../AddOrRemove/AddOrRemoveFromShCard';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: 15,
    height: 200,
    marginBottom: 5
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    margin: '10px 0 -20px 0px'
  },
  addOrRemove: {
    padding: "5px 25px"
  },
  contentSecion: {
    height: 45
  },
  priceSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  price: {
    fontSize: 11,
    color: "#36CE91",
    fontWeight: "bold",
    alignSelf: "center"
  },
  priceOff: {
    fontSize: 10,
    color: "red",
    fontWeight: "bold",
    textDecoration: "line-through"
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    marginTop: 5
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardContent: {
    padding: "0 3px"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Product = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card className={classes.root}>
      
      <CardMedia
        className={classes.media}
        image="/assets/logo.png"
        title="Paella dish"
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.contentSecion}>
          <div className={classes.priceSection}>
            <span className={classes.price}>{props.product.price}تومان</span>
            {
              props.product.off ? 
                <span className={classes.priceOff}>{props.product.offPrice}تومان</span>
              : ''
            }
          </div>
          <div className={classes.title}>
            <span>{props.product.title}</span>
          </div>
        </div>
        <Divider variant="light"/>
            {
              !props.product.number ?
              <AddToShoppingCard/>
              : <div className={classes.addOrRemove}><AddOrRemoveFromShCard number={2}/></div>
            }
      </CardContent>
      </Card>
  );
}
export default Product;