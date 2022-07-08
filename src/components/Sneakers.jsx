import React from "react";
import classes from './Sneakers.module.css'
const Sneakers = () => {
    return(
        <div>
          <div className={classes.block}></div>
          <img src="https://img.icons8.com/ios-filled/344/nike.png" className={classes.Nike}></img>
            <img src="https://img.icons8.com/ios-filled/344/instagram-new--v1.png" className={classes.inst}></img>
            <img src="https://img.icons8.com/ios-filled/344/facebook-new.png" className={classes.facebook}></img>
            <img src="https://img.icons8.com/glyph-neue/344/twitter.png" className={classes.twitter}></img>
        </div>
    )
}
export default Sneakers;