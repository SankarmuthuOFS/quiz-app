import classes from './styles/Home.module.css';
import image from './imgs/img.png';
import img2 from './imgs/img2.png'
import img3 from './imgs/img3.png'
import img4 from './imgs/img4.png'
import img5 from './imgs/img5.png'
export const HomeCards = () =>{
    return (
        <div>
             <div class={classes.card}>
                <div className={classes.cardtitle}>
                    <h1 className={classes.h1}>What we do</h1>
                 <p>
                    We are in the business of custom software engineering. For 25 years we have been partnering with customers, with an engineering mindset, doing what’s relevant, and winning their trust.
                </p>
                </div>
            </div>
            <div className={classes.card1}>
                <img src={image} className={classes.img} alt = "card1img"></img>
            </div>
            <div className={classes.card2}>
                <img src={img2} className={classes.img} />
            </div>
            <div className={classes.card3}>
                <img src={img3} className={classes.img} />
            </div>
            <div className={classes.card4}>
                <img src={img4} className={classes.img} />
            </div>
            <div className={classes.card5}>
                <img src={img5} className={classes.img} />
            </div>
        </div>
    )
}