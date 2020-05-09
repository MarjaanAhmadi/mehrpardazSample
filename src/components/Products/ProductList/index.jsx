// @flow
import React, {useEffect, useState} from 'react';
import injectSheet from 'react-jss';
import SingleProduct from '../SingleProduct/SingleProduct';
import { useSelector } from 'react-redux';
import mockProducts from '../../../mocks/products';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 3,
    paddingBottom: 5
  },
  item: {
    display: 'flex',
    padding: [[18, 0]],
  },
  imageWrapper: {
    flexShrink: 0,
  },
  image: {
    objectFit: 'cover',
    display: 'inline-block',
    backgroundColor: 'rgba(0, 0, 0, 0.067)',
    width: 96,
    height: 54,
    '@media (min-width: 640px)': {
      width: 250,
      height: 140,
    },
    '@media (min-width: 860px)': {
      width: 332,
      height: 186,
    },
  },
  bodyWrapper: {
    paddingLeft: 18,
    flex: '1 1 auto',
  },
  title: {
    composes: 'heading',
    lineHeight: 1,
    '& a': {
      fontSize: 18,
      color: theme.baseColor,
    },
    '@media (min-width: 640px)': {
      lineHeight: 1.5,
      '& a': {
        fontSize: 21,
      },
    },
  },
  excerpt: {
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    left: '-999em',
    lineHeight: 1.6,
    margin: [[18, 0]],
    '@media (min-width: 640px)': {
      position: 'static',
      opacity: 1,
      pointerEvents: 'auto',
      color: theme.textMuted,
    },
  },
  info: {
    fontSize: 13,
    marginRight: 6,
    color: theme.textMuted,
  },
});

const ProductList = (props) => {
  const isLoading = false;
  const reduxProducts = useSelector(state => state.products );
  const [products, setProducts] = useState({
    list: []
  });
  const {classes} = props;
  const placeholderItems = Array.from(Array(3).keys());
  const renderProducts = () => {
    return (
      products.list.map((product, idx) => {
        return <SingleProduct product={product} key={idx}/>
      })
    )
  }
  const checkProductsExist = () => {
    reduxProducts.length === 0 ? 
      setProducts({
        ...products,
        list: mockProducts
      })
      :
      setProducts({
        ...products,
        list: reduxProducts
      })
  }
  useEffect(() => {
    checkProductsExist();
  },[]);
  return(
    <React.Fragment>
      {
        isLoading ? 
        <div className={classes.root}>
          {placeholderItems.map(index => (
            <div key={index} className={classes.item}>
              <div className={classes.imageWrapper}>
                <div className={classes.image} />
              </div>
              <div className={classes.bodyWrapper}>
                <div className="placeholder" style={{ width: '100%' }} />
                <div className={classes.excerpt}>
                  <div className="placeholder" style={{ width: '100%' }} />
                  <div className="placeholder" style={{ width: '70%' }} />
                </div>
                <div className={classes.info}>
                  <div className="placeholder" style={{ width: '50%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        :
        <div className={classes.root}>
        {renderProducts()}
      </div>

      }
      </React.Fragment>
  )
}


export default injectSheet(styles)(ProductList);
