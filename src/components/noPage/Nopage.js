import React from 'react'
import { Link } from 'react-router-dom';

const Nopage = () => {
  return (
    <div>
        <div>
            <h1>Page not found</h1>
            <p>Look like you've followed a broken link or entered a URL that dosen't exist on this site.</p>
            <Link to="/">Back to our site</Link>
        </div>
    </div>
  )
}

export default Nopage;