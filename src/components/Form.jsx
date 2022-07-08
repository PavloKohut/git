import React from "react";
import classes from './Form.module.css'
const Form = () => {
    return(
     <div className='wrapper'>
     <img src='https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/344/external-sneakers-healthy-lifestyle-icongeek26-outline-gradient-icongeek26.png' className='logo'></img>
     <h1 className='text-1'> REACT SNEAKERS</h1>
     <h3 className='text-2'>Найкращий магазин кросівок</h3>
     <div className={classes.block}>
         <div className={classes.border}></div>
        <img src="https://imssport.pl/public/assets/adidas-logo.jpg" className={classes.photo}></img>
        <h1 className={classes.text}>Stan Smith<span>,</span></h1>
        <h1 className={classes.forever}>Forever!</h1>
       <button className={classes.buttons}>Купити</button>
       <img src="https://img.icons8.com/material-sharp/344/shopping-basket-add.png" className={classes.icon}></img>
       <div className={classes.money}>1207грн.</div>
       <img src="https://img.icons8.com/material/344/contacts--v1.png" className={classes.contact}></img>
       <img src="https://cdn.sanity.io/images/c1chvb1i/production/a049dd2fc1e856f54e5a9a2bad1d953231c613d0-1100x735.jpg/+PR-adidas_SS21_StanSmith_FX5502_OnFoot_Female_1.jpg" className={classes.photo1}></img>
     </div>
     </div>
    )
}
export default Form
