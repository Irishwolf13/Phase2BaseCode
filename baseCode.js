// Two lines below can be combined: import React, { useState, useEffect } from "react";
import React from "react";                      // Standard Import of React
import { useState, useEffect } from "react"     // Standard useState and useEffect import from React

// Standard useState
const [variable, setterForVariable] = useState('Variable default State');

// Standard UseEffect that only grabs JSON when first loaded because of the [] second argument
// AND preforms a Fetch GET Request
useEffect(() => {
    fetch('http://localhost:3001/WhatToGet')
    .then(res => res.json())
    .then(rawData => console.log(rawData))
},[])

//Standard Post Request
fetch("http://localhost:3001/WhereToPOST", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(sendData)
})
.then(res => res.json())                        // This .then is to check it worked properly
.then(returnData => console.log(returnData))    // This .then console logs the response so we can see it worked

//Standard PATCH Request
fetch("http://localhost:3001/WhereToPOST/SpecificItem", {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(sendData)
})
.then(res => res.json())                        // This .then is to check it worked properly
.then(returnData => console.log(returnData))    // This .then console logs the response so we can see it worked

// Standard React Component (this happenes to be named App)
function App( props ) {                     // Decolration of React Component, receiving props
    const variable = props.name             // Storing a variable from props
    return (                                // Start of Return
      <>                                    {/* Opening of HTML fragment, because you can only return one thing */}
        <Header variable={ variable }/>     {/* This is a componate, passing variable as prop into Header componate */}
        <div> HTML Div </div>               {/* This is a standard HTML div */}
        <Container />                       {/* This Container is a componate */}
      </>                                   // End of HTML fragment
    );                                      // End of Return
}                                           // End of Componate function
  
export default App; // Standard export of component for React