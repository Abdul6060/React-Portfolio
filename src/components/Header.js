import React from "react"
import HeaderCSS from "./Header.module.css"

function Header () {
    return (
        <div className={HeaderCSS.container}>
        <div className={HeaderCSS.head}><h4>Welcome To My Website</h4></div>
        <div className={HeaderCSS.navbar}><a href="index.html" className={HeaderCSS.nav}>Home</a>
        <a href="skills.js" className={HeaderCSS.nav}>Skills</a>
        <a href="services.html" className={HeaderCSS.nav}>Services</a>
        <a href="Resume.html" className={HeaderCSS.nav}>Resume</a></div>
        <div className={HeaderCSS.projects}>Projects</div>
        <div className={HeaderCSS.content}>
            <h1>Profile</h1>
            <p>Hi, I am Isah Abdulmalik,<br/>I'm from Nigeria,  <br/> I'm a front end web developer, 
            <br/> 
            I'm a masters degree holder in Physics, <br/> specializing in solid state physics, <br/>I'm a react developer, <br/>I'm available to be hired. 
            <br/>Skills: HTML, CSS, Javascript, jQuery, React, 
            <br/>NodeJS, quantum espresso, excel 
            <br/>Email: <a href="saabdud14@gmail.com">saabdud14@gmail.com</a> 
            <br/>Github: <a href="https://github.com/Abdul6060">https://github.com/Abdul6060</a> 
            <br/>Phone: +2349033941287</p>

            </div>
        <div className={HeaderCSS.footer}>footer</div>
    </div>

        )
    
}

export default Header;