import React, { useState } from 'react'
import { List, makeStyles, Container, Typography, Button } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import Contact from './../Components/Contact'
import Modal from '../Components/Modal'
import ContactForm from './../Components/Form';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  addIcon: {
    width: '150px',
    height: '150px'
  }
}))

const PhoneBook = (props) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [contacts, setContacts] = useState([
    {
      id: "111",
      firstName: "Martin",
      lastName: "Grill",
      countryCode: "+1",
      phone: "1234567890",
    },
    {
      id: "222",
      firstName: "John",
      lastName: "Don",
      countryCode: "+41",
      phone: "9378628381",
    },
    {
      id: "333",
      firstName: "Ricky",
      lastName: "Cage",
      countryCode: "+12",
      phone: "3245678902",
    }
  ])
  const [isEdit, setIsEdit] = useState(false)
  const [oldContact, setOldContact] = useState({})

  const handleEdit = (id) => {
    let rowData = contacts.filter((person) => {
      return person.id === id
    })[0]

    setIsEdit(true)
    setOldContact(rowData)
    handleOpen()
  }

  const handleDelete = (id) => {
    let data = contacts.filter((person) => {
      return person.id !== id
    });

    setContacts(() => [...data])
  }

  const handleAddContact = (contact) => {
    if (isEdit) {
      const updatedContact = contacts.filter((person) => {
        return person.id !== contact.id
      });

      setContacts(() => [...updatedContact, contact])
    } else {
      setContacts(() => [...contacts, contact])
    }

    handleClose()
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setOldContact({})
  }

  return (
    <Container maxWidth="sm">
      <Typography
        variant='h5'
      >
        Contact List
      </Typography>
      <List className={classes.root}>
        {contacts.map((contact, key) => {
          return <Contact
            key={key}
            {...contact}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        })}
      </List>
      <Button onClick={handleOpen}>
        <PersonAddIcon className={classes.addIcon} />
      </Button>
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