import React, { useState } from 'react';
import { Button, Grid, Card, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import InputField from './InputField';
import { getRandomString } from './../Utils'

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));
const ContactForm = ({
  id,
  firstName,
  lastName,
  countryCode,
  title,
  phone,
  submitActionText,
  handleAddContact
}) => {
  const classes = useStyles()
  const [firstNameValue, setFirstNameValue] = useState(firstName)
  const [lastNameValue, setLastNameValue] = useState(lastName)
  const [countryCodeValue, setCountryCodeValue] = useState(countryCode)
  const [phoneValue, setPhoneValue] = useState(phone)

  const onSubmit = (event) => {
    const contact = {
      id: id || getRandomString(),
      firstName: firstNameValue,
      lastName: lastNameValue,
      countryCode: countryCodeValue,
      phone: phoneValue,
    }

    handleAddContact(contact)
  }

  return (
    <Card className={classes.card}>
      <Typography variant="h4">{title}</Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <InputField
              required
              label="First Name"
              autoFocus
              name="firstNameValue"
              value={firstNameValue}
              onChange={event => setFirstNameValue(event.target.value)}
            />
          </Grid>
          <Grid item sm={6}>
            <InputField
              required
              label="Last Name"
              name="lastNameValue"
              value={lastNameValue}
              onChange={event => setLastNameValue(event.target.value)}
            />
          </Grid>
          <Grid item sm={6}>
            <InputField
              required
              label="Country Code"
              name="countryCodeValue"
              value={countryCodeValue}
              onChange={event => setCountryCodeValue(event.target.value)}
            />
          </Grid>
          <Grid item sm={6}>
            <InputField
              required
              label="Phone Number"
              name="phoneValue"
              value={phoneValue}
              onChange={event => setPhoneValue(event.target.value)}
            />
          </Grid>
        </Grid>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
        >
          {submitActionText}
        </Button>
      </form>
    </Card>
  )
}

ContactForm.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  countryCode: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  submitActionText: PropTypes.string.isRequired,
  handleAddContact: PropTypes.func.isRequired
};

export default ContactForm