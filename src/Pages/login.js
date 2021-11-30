
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import GoogleAvatar from '../img/google-button.png';
import FacebookAvatar from '../img/facebook-button.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoginImg from '../img/login.jpg';
import { signin, googleSignIn } from "../services/auth";
import Notification from '../Components/notification';
import { mapStateToProps } from '../services/redux';
import { SIGN_SUCCESS } from '../store/actions/action_types';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/mitev-dimitar/">
        BookShelves, Dimitar Mitev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${LoginImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: "white",
  },
  header: {
    fontSize: "6rem",
    fontFamily: "'Pacifico', cursive",
    transform: "rotate(-30deg)"
  },
  paper: {
    margin: theme.spacing(8, 4),
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
  socialContainer: {
    marginTop: 20
  },
  socialButton: {
    width: "48%",
    "&:hover": {
      background: "white",
      border: "1px solid #212121"
    }
  },
  socialAvatar: {
    width: 14,
    height: 14
  }
}));

function Login({
  auth,
  dispatch
}) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const { signError, message } = auth;
  const history = useHistory();

  const onEnterEmail = (e) => {
    setEmail(e.target.value);
  }

  const onEnterPass = (e) => {
    setPassword(e.target.value);
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const response = await signin(email, password, dispatch);
    if (response.user) {
      history.push('/');
    }
  }

  const onNotificationClose = () => {
    dispatch({
      type: SIGN_SUCCESS,
      data: ""
    });
  }

  const onGoogleSignIn = async () => {
    const response = await googleSignIn(dispatch);
    if (response.uid) {
      history.push('/');
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container alignItems="center" justify="center" direction="column" item xs={false} sm={4} md={7} className={classes.image}>
        <Typography className={classes.header}>
          Book
        </Typography>
        <Typography className={classes.header}>
          Shelves
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Grid container justify="space-between" className={classes.socialContainer}>
            <Button onClick={onGoogleSignIn} className={classes.socialButton} variant="outlined" startIcon={
                <Avatar className={classes.socialAvatar} alt={`Google button`} src={GoogleAvatar} />
              }
            >
              with Google
            </Button>
            <Button className={classes.socialButton} variant="outlined" startIcon={
                <Avatar className={classes.socialAvatar} alt={`Facebook button`} src={FacebookAvatar} />
              }
            >
              with Facebook
            </Button>
          </Grid>
          <Grid container justify="center" className={classes.googleContainer}>
              or
          </Grid>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              //autoFocus
              onChange={onEnterEmail}
              value={email}
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
              autoComplete="current-password"
              onChange={onEnterPass}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onFormSubmit}
            >
              Sign In
            </Button>
            <Notification 
              open={signError} 
              handleClose={onNotificationClose}
              severity='error'
              message={message}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);