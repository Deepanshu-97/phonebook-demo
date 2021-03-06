import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(10, 3),
    background: "#5d88ff",
    textAlign: 'center',
    height: '1vh',
    color: '#fff'
  }
}))


const Header = ({ title }) => {

  const classes = useStyles()
  return (
    <Typography
      className={classes.header}
      variant='h3'
      value={title}
    >
      {title}
    </Typography>

  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header