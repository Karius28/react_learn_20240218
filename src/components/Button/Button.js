import classes from './assets/scss/Button.module.scss';

const user = {
  name: 'ikawa',
}

const Button = () => {
  return (
    <button className={classes.button}>{user.name}</button>
  );
};

export default Button;