import React, { useState } from "react";
import "./topics.css";
import ReactJsAlert from "reactjs-alert";

const Topics = () => {
   
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div>
    <button class="topics" onClick={() => {
        setStatus(true);
        setType("success");
        setTitle("This is your topic!");
        }}> Topics</button>
    
    <ReactJsAlert
        status={status} // true or false
        type={type} // success, warning, error, info
        title={title}
        quotes={true}
        quote="What was your favourite holiday growing up!"
        Close={() => setStatus(false)}
      />
    

    </div>

   
   

    


  );
}





export default Topics