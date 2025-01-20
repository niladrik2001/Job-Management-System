import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import {Logo} from '../components';
import React from 'react';

const Landing = () => {
  return (
    <Wrapper>
    <nav>
     <Logo />    
    </nav>
    <div className='container page'>
      <div className='info'>
        <h1>

          job <span>tracking</span> app
        </h1>
        <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Magnam assumenda recusandae doloremque officia velit iste 
           quod quia in cum odit aperiam excepturi harum, earum cumque beatae ullam! 
           Voluptas, doloribus illo!
        </p>
        <Link to='/register' className='btn register-link'>
          Register
        </Link>
        <Link to='/login' className='btn'>
          Login / Demo User
        </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-ing' />
        </div>
    </Wrapper>
  );
};


export default Landing;