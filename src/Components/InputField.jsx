import React from 'react';
import { TextField, Typography } from '@material-ui/core';

const InputField = ({ error, maxSize, ...props }) => (
  <>
    <TextField {...props} />
    {error &&
      <Typography color="error">{error}</Typography>}
  </>
);

export default InputField;