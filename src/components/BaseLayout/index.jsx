// @flow
import * as React from 'react';
import injectSheet from 'react-jss';
import { Helmet } from 'react-helmet';

import { host } from '../../utils/helpers';


const styles = theme => ({
  container: {
    maxWidth: 1000,
    margin: [[0, 'auto']],
  },
  header: {
    top: 0,
    width: '100%',
    position: 'fixed',
    left: 0,
    backgroundColor: "black",
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  logo: {
    width: 20,
    height: 20,
  },
  menuButton: {
    border: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: [[0, 18]],
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  leftHeader: {
    display: 'flex',
    padding: [[15, 0, 15, 0]],
    flexGrow: 1,
    textAlign: 'center',
    maxHeight: 50,
  },
  github: {
    display: 'flex',
    padding: [[15, 18]],
    flexGrow: 1,
    textAlign: 'center',
    maxHeight: 45,
    justifyContent: 'center',
  },
  githubIcon: {
    height: '0.5em',
    marginRight: 8,
    display: 'inline-block',
  },
  githubTitle: {
    color: theme.baseColor,
  },
  content: {
    marginTop: 45
  },
  footer: {
    width: '100%',
  },
  footerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    padding: [[0, 18]],
    color: theme.textMuted,
    fontSize: 14,
    borderTop: '1px solid rgba(0,0,0,.15)',
    '@media (min-width: 860px)': {
      padding: 0,
    },
    '& a': {
      color: theme.textMuted,
    },
  },
});
const BaseLayout = (props) => {
  const defaultProps = {
    title: 'React Marketo',
    description: 'React Marketo Description',
    keywords: 'react, pwa, pwa indonesia',
    canonical: host,
    image: `${host}/assets/logo.png`,
    pubDate: '',
    isArticle: false,
  };
  const {
    children,
    title,
    description,
    keywords,
    canonical,
    image,
    pubDate,
    isArticle,
  } = props;
  return (
    <React.Fragment>
      <Helmet>
        {isArticle && <html lang="id" itemScope itemType="http://schema.org/Article" />}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="WWWID" />
        <meta name="robots" content="index, follow" />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rizalibnuabd" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@rizalibnuabd" />
        <meta name="twitter:image:src" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="React Marketo" />
        {isArticle && <meta property="article:published_time" content={pubDate} />}
        {isArticle && <meta property="article:modified_time" content={pubDate} />}
        <link rel="canonical" href={canonical} />
      </Helmet>
      {children}
    </React.Fragment>
  );

}


export default injectSheet(styles)(BaseLayout);
