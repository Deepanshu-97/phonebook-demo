import React from 'react'
import { ListItem, Avatar, ListItemAvatar, Typography, ListItemText, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline',
  },
}))

const Contact = ({
  id,
  firstName,
  lastName,
  countryCode,
  phone,
  avatarUrl,
  handleEdit,
  handleDelete
}) => {
  const classes = useStyles()
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="" src={avatarUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={`${firstName} ${lastName}`}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {countryCode}
            </Typography>
            {phone}
          </React.Fragment>
        }
      />
      <Button onClick={() => handleEdit(id)}>
        <EditIcon />
      </Button>
      <Button onClick={() => handleDelete(id)}>
        <DeleteIcon />
      </Button>
    </ListItem>
  )
}

export default Contact