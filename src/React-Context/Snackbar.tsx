import { Button, IconButton, Snackbar, SnackbarCloseReason } from '@mui/material';
import { createContext, Fragment, PropsWithChildren, useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export type SnackBarContextProp =  {
    openSnackBar: (message: string) => void
};

type SnackBarProvierProp = PropsWithChildren;

export const SnackbarContext = createContext<SnackBarContextProp | null>(null);

const SnackbarProvider = ({children} : SnackBarProvierProp) => {
    const [open, setOpen] = useState(false);
    const [snackBarMessage, setSnackbarMessage] = useState('');

    const handleClose = ( event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false);
    };

    const action = (
        <Fragment>
          {/* <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button> */}
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      );

    const openSnackBar = (message: string) => {
        setOpen(true);
        setSnackbarMessage(message)
    }

    return (
        <SnackbarContext.Provider value={{openSnackBar}}>
           <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={snackBarMessage}
                action={action}
            />
            {children}
        </SnackbarContext.Provider>
    )
};

export default SnackbarProvider;

export const useSnackbar = () => {
    const context =  useContext(SnackbarContext);
    if(!context)
        throw new Error('Cannot Create Context');

    return context;
}