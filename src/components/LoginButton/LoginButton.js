import classes from './assets/scss/LoginButton.module.scss';

const user = {
  name: 'ikawa',
}

const LoginButton = () => {
  return (
    <button className={classes.LoginButton}>Login</button>
  );
};

export default LoginButton;