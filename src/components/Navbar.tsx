import { ChangeEvent, useContext, useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, FormControl, MenuItem, Select, Chip } from '@material-ui/core';
import Box from '@mui/material/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import WelcomeMessage from './WelcomeMessage';
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Login from './Login';
import { AuthContext } from '../contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        positionSelect: {
            color: 'white',
            borderBottom: '1px solid white',
        },
    }),
);

const Navbar = () => {
    // styles
    const classes = useStyles();

    // context
    const { lastTime, status } = useContext(ProgressContext);
    const { theme } = useContext(ThemeContext);
    const {
        authInfo: { isAuthenticated },
        toggleAuth,
    } = useContext(AuthContext);

    // state
    const [position, setPosition] = useState<string>('Full-stack Devoloper');

    const [time, setTime] = useState<Date>(() => new Date(Date.now()));

    const [loginOpen, setLoginOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
        return () => clearInterval(timer);
    }, []);
    const onPositionChange = (e: ChangeEvent<{ value: unknown }>) => {
        setPosition(e.target.value as string);
    };

    return (
        <AppBar position="static" color={theme}>
            <Toolbar>
                <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
                    <Typography variant="h5">My movies</Typography>

                    <Box textAlign="center">
                        <WelcomeMessage position={position} />
                        <Chip label={`Last time working on this project: ${lastTime} - Status: ${status}`} />

                        <Box mt={1}>
                            <FormControl>
                                <Select value={position} onChange={onPositionChange} className={classes.positionSelect}>
                                    <MenuItem value="Full-stack Developer">Full-stack Developer</MenuItem>
                                    <MenuItem value="Front-end Developer">Front-end Developer</MenuItem>
                                    <MenuItem value="Back-end Developer">Back-end Developer</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box textAlign="center">
                        <Box my={1}>
                            <Typography variant="h6">{time.toUTCString()}</Typography>
                        </Box>
                        <Button
                            variant="contained"
                            onClick={isAuthenticated ? toggleAuth.bind(this, '') : setLoginOpen.bind(this, true)}
                        >
                            {isAuthenticated ? 'Logout' : 'login'}
                        </Button>
                    </Box>
                    <Login isOpen={loginOpen} handleClose={setLoginOpen} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
