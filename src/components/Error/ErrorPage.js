import React from 'react'
import Navbar from '../LandingPage/Components/NavBar/NavBar'
import './ErrorPage.css'
import errorImg from '..//../assets/error404.png'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>SchoolHub | Error 404 Not Found</title>
        <meta name="description" content="SchoolHub. The page your looking for was not found." />
      </Helmet>
    <Navbar/>
    <div className='errorpage_container'>
        <img className="error_banner" src={errorImg} alt="404 error image" />
        <h2>404 Error<br/> Page Not Found!</h2>  
        <p>Go back to <Link to="/">Home</Link></p> 
    </div>
    
    </>
  )
}

export default ErrorPage