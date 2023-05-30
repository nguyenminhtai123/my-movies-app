import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core';
import React, { ChangeEvent, Dispatch, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

interface LoginProps {
    isOpen: boolean;
    handleClose: Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, handleClose }: LoginProps) => {
    const { toggleAuth } = useContext(AuthContext);

    const [username, setUsername] = useState('');

    const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const onLoginSubmit = () => {
        toggleAuth(username);
        setUsername('');
        handleClose(false);
    };
    return (
        <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
            <DialogContent>
                <TextField label="username" onChange={onUsernameChange} value={username} required />
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={onLoginSubmit} disabled={username === ''}>
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Login;
