
import React, {useRef, useState} from 'react';
import "./app.css";

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
    <div className="App">
        <header>
            <SignOut/>
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
    <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>)
}

function SignOut() {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

function ChatRoom(){
    const dummy = useRef()
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(25);

    const [messages] = useCollectionData(query, {idField:"id"});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault();

        const {uid} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid
        });

        setFormValue('');

        dummy.current.scrollIntoView({behaviour: 'smooth'});
    }

    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}></ChatMessage>)}
                <span ref={dummy}></span>
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice!"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

function ChatMessage(props) {
    const {text, uid} = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent': 'received';

    return ( <>
        <div className={`message ${messageClass}`}>
            <p>{text}</p>
        </div>
    </>)
}

export default Chat