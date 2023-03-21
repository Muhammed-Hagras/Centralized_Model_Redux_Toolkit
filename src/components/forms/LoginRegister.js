import React from 'react';
import { useDispatch } from 'react-redux';
import { openModel } from '../../store/modelSlice';

const LoginRegister = () => {
  const dispatch =  useDispatch();
  return (
    <div className='login-register'>
      <button className='btn' onClick={()=>dispatch(openModel({name:'Login', position: 'center'}))}>Login</button>
      <div>OR</div>
      <button className='btn' onClick={()=> dispatch(openModel({name:'Register', position: 'bottom'}))}>Register</button>
    </div>
  );
};

export default LoginRegister;
