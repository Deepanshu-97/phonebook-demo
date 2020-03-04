import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogActions } from "@material-ui/core"

const Modal = ({
  open,
  handleSubmit,
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
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  )
}

export default Modal