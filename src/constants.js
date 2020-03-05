const INVALID_PHONE = 'Please enter a valid phone number'
const INVALID_COUNTRY_CODE = 'Please enter a valid Country Code'
const INVALID_FIRST_NAME = 'Please enter a valid First Name'
const INVALID_LAST_NAME = 'Please enter a valid Last Name'

const INITIAL_CONTACTS = [
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
]

export {
  INVALID_PHONE,
  INVALID_COUNTRY_CODE,
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  INITIAL_CONTACTS
}