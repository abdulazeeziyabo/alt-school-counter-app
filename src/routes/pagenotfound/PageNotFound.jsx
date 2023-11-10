import React from 'react';
import {Link} from 'react-router-dom';
import './pagenotfound.css';

const PageNotFound = () => {
  return (
    <div className='notfound-wrapper'>
      <h1>404 Page</h1>
      <h3>This page is not found</h3>
      <Link to='/'>Back to Homepage</Link>
    </div>
  )
}

export default PageNotFound