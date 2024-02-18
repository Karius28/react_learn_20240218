import classes from './assets/scss/ImageBox.module.scss';
import imagePc from './assets/images/faceImage_pc.jpg';
import imageSp from './assets/images/faceImage_sp.jpg';

const user = {
  name: 'ikawa',
}

const Button = () => {
  return (
    <picture>
      <source srcSet={imagePc} media='(min-width: 768px)'></source>
      <source srcSet={imageSp} media='(max-width: 767px)'></source>
      <img className={classes.imageBox} src={imagePc} alt={user.name}></img>
    </picture>
  );
};

export default Button;