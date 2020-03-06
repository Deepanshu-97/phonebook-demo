import React, { useState, useReducer } from 'react'
import { List, makeStyles, Container, Typography, Button, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import Contact from './../Components/Contact'
import Modal from '../Components/Modal'
import ContactForm from './../Components/Form';
import { contactReducer } from './../Reducers/contactReducer'
import { INITIAL_CONTACTS } from './../constants'
import { deleteContact, submitContact, deleteMultipleContact } from './../Actions/actionCreators'
import Header from './../Components/Header'

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 15vh",
  },
  paper: {
    padding: theme.spacing(10, 3),

  },
  addIcon: {
    width: '40px',
    height: '40px'
  },
  dFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15%'
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

  const deleteMultipleContacts = () => {
    dispatch(deleteMultipleContact(checked))
    setChecked([])
  }

  const handleToggle = value => {
    const newChecked = checked.filter((id) => id === value);

    if (newChecked.length) {
      setChecked(checked.filter(ch => ch !== value))
    } else {
      setChecked([...checked, value])
    }
  }

  return (
    <div className={classes.root}>
      <Header title='PHONE BOOK' />
      <Paper elevation={4} className={classes.paper}>

        <div className={classes.dFlex}>
          <Button onClick={handleOpen}>
            <PersonAddIcon className={classes.addIcon} />
          </Button>
          {checked.length
            ? (
              <Button onClick={deleteMultipleContacts}>
                <DeleteIcon /> Delete Multiple
              </Button>

            )
            : null
          }
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

      </Paper>
    </div>
  )
}


export default PhoneBook