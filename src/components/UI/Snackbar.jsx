import React from 'react';
import {Snackbar as MuiSnackbar} from '@mui/material';
import { Alert } from "@mui/material";
const Snackbar = ({isOpen, onClose,message,severity, autoHideDuration  }) => {
    return (
        <MuiSnackbar
        open={isOpen}
        autoHideDuration={autoHideDuration || 4000}
        onClose={onClose}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      >
       <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </MuiSnackbar>
    );
};

export default Snackbar;