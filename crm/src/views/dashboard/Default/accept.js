import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { width } from '@mui/system';

export default function FormDialog({open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Код</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите код курьера                 
            <p style={{color: 'white'}}>Введите код курьераВведите код курьераВведите код курьера</p>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Код курьера"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose}>Выдать</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}