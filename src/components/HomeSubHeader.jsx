import { useState } from 'react';
import classes from './styles/Home.module.css';

export const HomeSubHeader = () => {

    const [login, setLogin] = useState(false);
    
    const handleClick = (e) => {
        alert('User login form');
        console.log(e);
        setLogin(true);
    }

    if(!login){
        return(<button className={classes.btn} onClick={handleClick}>Login</button>)
    }
    else{
        return(<button className={classes.btn} >Start Quiz</button>)
    }
}