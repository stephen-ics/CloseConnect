import React from 'react'
import "./about.css";

const About = () => {
  return (
    <div className="about">
        <header><h1>About Us</h1></header>
        <div className="container">
            <div className="about-us">
                <h3>Stephen Ni</h3>
                <img></img>
                <h4>My name is Stephen and I'm currently a junior at John Fraser Secondary School. All aspects of computer science fascinates me, currently I am focusing on learning front-end web development with React!</h4>
            </div>
            <div className="about-us">
                <h3>Sophie Yang</h3>
                <img></img>
                <h4>My name is Sophie and I am a current sophomore in high school. I am fascinated by all things related to computer science and business. I also enjoy engaging with my community through various clubs.</h4>
            </div>
            <div className="about-us">
                <h3>Aditiya Ajay</h3>
                <img></img>
                <h4>My name is Ajay and I am a junior at John Fraser Secondary School. I have in-depth knowledge on machine learning and I have even published a book on stock trading for teenagers!</h4>
            </div>
            <div className="about-us">
                <h3>Aaron Dias</h3>
                <img></img>
                <h4>Yo, I'm Aaron and I'm a sophomore in high school. I'm really interested in the stem field, which is why I wanted to give this a shot!</h4>
            </div>
        </div>
    </div>
 
   
 
  )
}

export default About