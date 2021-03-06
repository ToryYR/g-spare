import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

const AlignItemsList = (props) => {
  const {classes} = props;
  const users = [
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={require('assets/img/faces/avatar.jpg')}/>
      </ListItemAvatar>
      <ListItemText
        primary='name'
        secondary={
          <React.Fragment>
            <Typography component="span" className={classes.inline} color="textPrimary">
              des
            </Typography>
            sub des
          </React.Fragment>
        }
      />
    </ListItem>
  ];

  users.push(users[0]);
  users.push(users[0]);
  users.push(users[0]);
  users.push(users[0]);
  users.push(users[0]);
  users.push(users[0]);

  return (
    <List className={classes.root}>
      {users}
    </List>
  );
};

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);