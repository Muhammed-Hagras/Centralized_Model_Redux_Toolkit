import React from 'react';
import { useDispatch } from 'react-redux';
import { openModel } from '../../store/modelSlice';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='header'>
      <ul className='header-right'>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <ul className='header-left'>
        <li onClick={()=>dispatch(openModel({name:'Login', position: 'center'}))}>Login</li>
        <li onClick={()=> dispatch(openModel({name:'Register', position: 'bottom'}))}>Register</li>
      </ul>
    </div>
  );
};

export default Header;
