import Logo from './imgs/logo.png';
import classes from './styles/Home.module.css';
export const Header = () =>{
    return(
        <nav className={classes.nav}>
            <img src={Logo}/>
        </nav>
    )
}