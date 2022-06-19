import React from 'react'
import "./contact-us.css";
import discord from "./icons/discord.png";
import instagram from "./icons/instagram.webp";
import gmail from "./icons/gmail.webp";

const ContactUs = () => {
  return (
    <div className="contacts">
        <header><h1>Contacts</h1></header>
        <div className="container">
            <div className="profiles">
                <h1>Stephen Ni</h1>
                <img className="pfp"></img>
                <div className="icons">
                    <a>
                        <img class="icon" src={discord}></img>
                    </a>
                    <a>
                        <img class="icon" src={instagram}></img>
                    </a>
                    <a>
                        <img class="icon" src={gmail}></img>
                    </a>
                </div>
            </div>
            <div className="profiles">
                <h1>Sophie Yang</h1>
                <img className="pfp"></img>
                <div className="icons">
                    <a>
                        <img class="icon" src={discord}></img>
                    </a>
                    <a>
                        <img class="icon" src={instagram}></img>
                    </a>
                    <a>
                        <img class="icon" src={gmail}></img>
                    </a>
                </div>
            </div>
            <div className="profiles">
                <h1>Aditiya Ajay</h1>
                <img className="pfp"></img>
                <div className="icons">
                    <a>
                        <img class="icon" src={discord}></img>
                    </a>
                    <a>
                        <img class="icon" src={instagram}></img>
                    </a>
                    <a>
                        <img class="icon" src={gmail}></img>
                    </a>
                </div>
            </div>
            <div className="profiles">
                <h1>Aaron Dias</h1>
                <img className="pfp"></img>
                <div className="icons">
                    <a>
                        <img class="icon" src={discord}></img>
                    </a>
                    <a>
                        <img class="icon" src={instagram}></img>
                    </a>
                    <a>
                        <img class="icon" src={gmail}></img>
                    </a>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default ContactUs