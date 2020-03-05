import { SUBMIT_CONTACT, DELETE_CONTACT, DELETE_MULTIPLE_CONTACT } from './actionTypes'

// contacts action creators
export const submitContact = (contact) => {
  return {
    type: SUBMIT_CONTACT,
    data: contact
  }
}

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    data: id
  }
}

export const deleteMultipleContact = (ids) => {
  return {
    type: DELETE_MULTIPLE_CONTACT,
    data: ids
  }
}