import { IconButton, Snackbar, SnackbarCloseReason } from '@mui/material';
import { createContext, Fragment, PropsWithChildren, useContext, useReducer } from 'react'
import CloseIcon from '@mui/icons-material/Close';

type SnackBarContextProp =  {
    openSnackBar: (message: string) => void
};
type SnackBarProvierProp = PropsWithChildren;

type SnackBarContentProp = {
  isOpen: boolean,
  message: string
};

type SnackBarReducerActProp = {
  type: 'open' | 'close',
  payload? : string
}

export const SnackbarContext = createContext<SnackBarContextProp | null>(null);

const SnackbarProvider = ({children} : SnackBarProvierProp) => {
    const initialState : SnackBarContentProp = {isOpen: false, message: ''};

    const reducer = (state: SnackBarContentProp, action: SnackBarReducerActProp) : SnackBarContentProp => {
      if(state){
        void 0;
      };
      
      switch (action.type) {
        case 'open':
          return { isOpen: true, message: action.payload || ''};
        case 'close':
          return { isOpen: false, message: ''};
      };
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleClose = ( event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if(event){
        void 0;
      }  
      if (reason === 'clickaway') {
          return;
        }

        dispatch({type: 'close', payload: ''});
    };

    const action = (
        <Fragment>
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
        dispatch({type: 'open', payload: message});
    }

    return (
        <SnackbarContext.Provider value={{openSnackBar}}>
           <Snackbar
                open={state.isOpen}
                autoHideDuration={5000}
                onClose={handleClose}
                message={state.message}
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