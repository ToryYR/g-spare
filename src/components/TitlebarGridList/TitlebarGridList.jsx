import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const tileData = [
  {
    img: require('assets/img/bg.jpg'),
    title: 'Breakfast',
    author: 'jill111',
    cols: 2,
    featured: true,
  },
  {
    img: require('assets/img/bg2.jpg'),
    title: 'Tasty burger',
    author: 'director90',
  },
  {
    img: require('assets/img/bg3.jpg'),
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: require('assets/img/bg4.jpg'),
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: require('assets/img/bg7.jpg'),
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: require('assets/img/bg.jpg'),
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: require('assets/img/bg2.jpg'),
    title: 'Vegetables',
    author: 'jill111',
    cols: 2,
  },
  {
    img: require('assets/img/bg3.jpg'),
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: require('assets/img/bg4.jpg'),
    title: 'Mushrooms',
    author: 'PublicDomainPictures',
  },
  {
    img: require('assets/img/bg7.jpg'),
    title: 'Olive oil',
    author: 'congerdesign',
  },
  {
    img: require('assets/img/bg.jpg'),
    title: 'Sea star',
    cols: 2,
    author: '821292',
  },
  {
    img: require('assets/img/bg2.jpg'),
    title: 'Bike',
    author: 'danfador',
  },
];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">사진첩</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);