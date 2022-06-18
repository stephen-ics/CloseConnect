
import React, {useRef, useState} from 'react'

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCYU8-iOAxhNSeJS-AcaYxB0e-iqedW3jw",
  authDomain: "closeconnect-711e3.firebaseapp.com",
  projectId: "closeconnect-711e3",
  storageBucket: "closeconnect-711e3.appspot.com",
  messagingSenderId: "1012937648998",
  appId: "1:1012937648998:web:37d24ad206c2dc32a6b6a7",
  measurementId: "G-XECP1RFCDC"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = () => {
    const [user] = useAuthState(auth);
    return (
    <div>
        <header>

        </header>

        <section>
            {user ? <ChatRoom/>: <SignIn/>}
            
        </section>

    </div>
  );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return( <>
    <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>)
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

function ChatRoom(){
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(25);

    const [messages] = useCollectionData(query, {idField:"id"});


    return (
        <>
            <div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}></ChatMessage>)}
            </div>
        </>
    )
}

function ChatMessage(props) {
    const {text, uid} = props.message;
  

    return ( <>
        <p>{text}</p>
    </>)
}

export default Chat