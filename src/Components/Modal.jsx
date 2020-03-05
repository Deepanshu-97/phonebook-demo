import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogActions } from "@material-ui/core"
import PropTypes from 'prop-types';

const Modal = ({
  open,
  handleClose,
  title,
  children
}) => {
  return (
    < div >
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  )
}

Modal.propTypes = {
  open:PropTypes.bool,
  handleClose:PropTypes.func.isRequired,
  title:PropTypes.string,
  children:PropTypes.node
}

export default Modal