import React from 'react'

function Rendering() {
    const isLoggedIn = true;
  return isLoggedIn ? <h2>Welcome, User!</h2> : <h2>Please log in.</h2>
    
}

export default Rendering