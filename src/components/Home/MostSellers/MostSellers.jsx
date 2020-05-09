import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import CarouselItems from '../../../mainComponents/Carousel/Carousel';
import products from '../../../mocks/products';
import ArrorwBackIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        marginTop: 15,
        alignItems: 'center'
    },
    mostSellerTitles : {
        justifyContent: 'space-between',
        flexDirection: "row",
        display: 'flex'
    },
    title: {
        fontSize: 14
    },
    more: {
        color: '#9A9A9A',
        fontSize: 11,
        alignSelf: 'center'
    },
    moreIcon: {
        color: '#9A9A9A'
    }
})

const MostSellers = () => {
    const history = useHistory();
    const [showMore, setShowMore] = useState(true)

    const showMoreFunc = (more) => {
        setShowMore(more);
    }
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.mostSellerTitles}>
            <span className={classes.title}>پرفروشترین محصولات</span> 
            {showMore ? <span className={classes.more} onClick={()=>{history.push('/products')}}>بیشتر<ArrorwBackIcon className={classes.more}/></span> : ''}
            </div>
            <CarouselItems setMore={(more) => {showMoreFunc(more)}} data={products}/>
        </div>
    )
}
export default MostSellers;