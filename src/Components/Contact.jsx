import React from 'react'
import { ListItem, Avatar, ListItemAvatar, Typography, ListItemText, Button, Checkbox, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
  bottomBorder: {
    borderBottom: '1px solid #ececec'
  }
}))

const Contact = ({
  id,
  firstName,
  lastName,
  countryCode,
  phone,
  avatarUrl,
  handleEdit,
  handleDelete,
  handleToggle,
  checked
}) => {
  const classes = useStyles()

  return (
    <ListItem alignItems="flex-start" className={classes.bottomBorder}>
      <ListItemIcon>
        <Checkbox
          edge="end"
          onChange={() => handleToggle(id)}
          checked={checked.indexOf(id) !== -1}
        />
      </ListItemIcon>
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

Contact.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  countryCode: PropTypes.string,
  phone: PropTypes.string,
  avatarUrl: PropTypes.string,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  checked: PropTypes.arrayOf(PropTypes.string),
  handleToggle: PropTypes.func
}

export default Contact