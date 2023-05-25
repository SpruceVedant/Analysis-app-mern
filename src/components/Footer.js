import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";
  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { makeStyles } from "@material-ui/core";
  
  const useStyles = makeStyles(() => ({
    footer: {
      marginTop: 50,
      height: 75,
      textAlign: "center",
      color: "gray",
      fontFamily: "Montserrat"
    },
    icons: {
      color: "#4eabcf"
    },
    icondiv: {
      marginTop: 7,
      display: "flex",
      gap: 15,
      justifyContent: "center"
    }
  }));
  const Footer = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.footer}>
        
        <div className={classes.icondiv}>

        
        </div>
      </div>
    );
  };
  
  export default Footer;
  