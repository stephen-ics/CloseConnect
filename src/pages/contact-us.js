import React from 'react'
import "./contact-us.css";
import discord from "./icons/discord.png";
import instagram from "./icons/instagram.webp";
import gmail from "./icons/gmail.webp";
import devpost from "./icons/devpost.png"

const ContactUs = () => {
  return (
    <div className="contacts">
        <header><h1>Contacts</h1></header>
        <div className="container">
            <div className="profiles">
                <h1>Stephen Ni</h1>
                <img className="pfp"></img>
                <div className="icons">
                    <a href="https://devpost.com/744831" target="_blank">
                        <img class="icon" src={devpost}></img>
                    </a>
                    <a href="https://www.instagram.com/stephen.turtles/" target="_blank">
                        <img class="icon" src={instagram}></img>
                    </a>
                </div>
            </div>
            <div className="profiles">
                <h1>Sophie Yang</h1>
                <img className="pfp"></img>
                <div className="icons">
                    <a href="https://devpost.com/sophieyang12345" target="_blank">
                        <img class="icon" src={devpost}></img>
                    </a>
                    <a href="instagram.com/sophi3yang/" target="_blank">
                        <img class="icon" src={instagram}></img>
                    </a>
                </div>
            </div>
            <div className="profiles">
                <h1>Aditiya Ajay</h1>
                <img className="pfp"></img>
                <div className="icons">
                    <a>
                        <img class="icon" src={devpost}></img>
                    </a>
                    <a href="https://www.instagram.com/aj_mmv/" target="_blank">
                        <img class="icon" src={instagram}></img>
                    </a>
                </div>
            </div>
            <div className="profiles">
                <h1>Aaron Dias</h1>
                <img className="pfp"></img>
                <div className="icons">
                    <a>
                        <img class="icon" src={devpost}></img>
                    </a>
                    <a href="https://www.instagram.com/diass_aaron/" target="_blank">
                        <img class="icon" src={instagram}></img>
                    </a>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default ContactUs