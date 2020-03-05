import React, { useState, useReducer } from 'react'
import { List, makeStyles, Container, Typography, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import Contact from './../Components/Contact'
import Modal from '../Components/Modal'
import ContactForm from './../Components/Form';
import { contactReducer } from './../Reducers/contactReducer'
import { INITIAL_CONTACTS } from './../constants'
import { deleteContact, submitContact, deleteMultipleContact } from './../Actions/actionCreators'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  addIcon: {
    width: '40px',
    height: '40px'
  },
  dFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 18px'
  }
}))

const PhoneBook = (props) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [contacts, dispatch] = useReducer(contactReducer, INITIAL_CONTACTS)
  const [isEdit, setIsEdit] = useState(false)
  const [oldContact, setOldContact] = useState({})
  const [checked, setChecked] = useState([]);


  const handleEdit = (id) => {
    let rowData = contacts.filter((person) => {
      return person.id === id
    })[0]

    setIsEdit(true)
    setOldContact(rowData)
    handleOpen()
  }

  const handleDelete = (id) => dispatch(deleteContact(id))



  const handleAddContact = (contact) => {
    dispatch(submitContact({
      isEdit,
      contact
    }))

    handleClose()
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setOldContact({})
  }

  const deleteMultipleContacts = () => dispatch(deleteMultipleContact(checked))

  const handleToggle = value => {
    const newChecked = checked.filter((ch) => ch === value);

    if (newChecked.length) {
      const l = checked.filter(ch => ch !== value)
      setChecked(l)
    } else {
      setChecked([...checked, value])
    }
  }

  return (
    <Container maxWidth="sm">
      <div className={classes.dFlex}>
        <Typography
          variant='h5'
        >
          Contact List
      </Typography>
        <Button onClick={handleOpen}>
          <PersonAddIcon className={classes.addIcon} />
        </Button>
      </div>
      <List className={classes.root}>
        {contacts.map((contact, key) => {
          return <Contact
            key={key}
            {...contact}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            checked={checked}
          />
        })}
      </List>
      {checked.length
        ? (
          <Button onClick={deleteMultipleContacts}>
            <DeleteIcon />
          </Button>

        )
        : null
      }
      <Modal
        title={'Add Contact Form'}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <ContactForm
          id={isEdit ? oldContact.id : ''}
          firstName={isEdit ? oldContact.firstName : ''}
          lastName={isEdit ? oldContact.lastName : ''}
          countryCode={isEdit ? oldContact.countryCode : ''}
          phone={isEdit ? oldContact.phone : ''}
          submitActionText={isEdit ? 'Update' : 'Submit'}
          handleAddContact={handleAddContact}
          isEdit={isEdit}
        />
      </Modal>
    </Container>
  )
}


export default PhoneBook