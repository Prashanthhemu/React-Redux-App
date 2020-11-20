import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAuthenticationDetails } from '../../redux';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  erroMessageStyle: {
    color: red
  }
}));

function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const errorMessage = useSelector(state => state.login.error)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()


  const nextProps = useSelector((state) => ({
    isDataUpdated: state.login.dataUpdated ? state.login.dataUpdated : false,
    isError: state.login.isError ? state.login.isError : false,
  }));

  useEffect(() => {
    if (nextProps.isDataUpdated && !nextProps.isError) {
      history.push("/userManagement");
    }
  }, [
    nextProps.isDataUpdated,
    nextProps.isError
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const authenticateRequest = {
      userName: username,
      password: password
    }
    dispatch(fetchUserAuthenticationDetails(authenticateRequest))
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {nextProps.isError && (<label className={classes.erroMessageStyle}>{errorMessage}</label>)}
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign In
      </Button>
        </form>
      </div>
    </Container>
  )
}

export default Login


