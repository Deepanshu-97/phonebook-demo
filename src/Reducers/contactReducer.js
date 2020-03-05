import {
  SUBMIT_CONTACT,
  DELETE_CONTACT,
  DELETE_MULTIPLE_CONTACT,
} from '../Actions/actionTypes'

import { INITIAL_CONTACTS } from './../constants'

export const contactReducer = (state = INITIAL_CONTACTS, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT: {
      const { isEdit, contact } = action.data
      if (isEdit) {
        const updatedContact = state.filter((person) => {
          return person.id !== contact.id
        });

        return [...updatedContact, contact]
      } else {
        return [...state, contact]
      }
    }

    case DELETE_CONTACT: {
      const data = state.filter((person) => {
        return person.id !== action.data
      })

      return data
    };

    case DELETE_MULTIPLE_CONTACT: {
      console.log(action)
      const data = state.filter((person) => {
        return !action.data.includes(person.id)
      })

      return data
    }

    default:
      return state
  }
}

