import { INVALID_COUNTRY_CODE, INVALID_LAST_NAME, INVALID_FIRST_NAME, INVALID_PHONE } from './constants';

export const validateContact = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'countryCode',
    'phone'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Please Enter ${field}`
    }
  });
  if (values.phone && !values.phone.match(/\d{10}/)) {
    errors.phoneNumber = INVALID_PHONE
  }
  if (values.firstName && !values.firstName.match(/[a-zA-Z_]/)) {
    errors.firstName = INVALID_FIRST_NAME
  }
  if (values.lastName && !values.lastName.match(/[a-zA-Z_]/)) {
    errors.lastName = INVALID_LAST_NAME
  }
  if (values.countryCode && !values.countryCode.match(/^\+(?:[0-9]+)/)) {
    errors.countryCode = INVALID_COUNTRY_CODE
  }


  return errors;
};