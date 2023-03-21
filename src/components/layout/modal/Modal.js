import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseSVG from '../../../assets/close.svg';
import { closeModel } from '../../../store/modelSlice';
import './modal.css';
import Register from '../../forms/Register'
import Login from '../../forms/Login'
import LoginRegister from '../../forms/LoginRegister'

const Modal = () => {
  const {isOpen, componentName, modelChildPosition}= useSelector(state => state.modelReducer);
  const dispatch =useDispatch();

  const closeModelHandler = () => {
    dispatch(closeModel());
  }

  // const componentHandler = () => {
  //   switch(componentName) {
  //     case 'register': 
  //     return <Register/>

  //     case 'login': 
  //     return <Login/>
      
  //     case 'loginRegister': 
  //     return <LoginRegister/>
  //   }
  // }

  const componentMockUp = {Login, Register,LoginRegister}

  let renderComponent;

  if(componentName) {
    const SelectedComponent = componentMockUp[componentName];
    if(SelectedComponent){
      renderComponent = <SelectedComponent/>
    }
  }

  console.log(renderComponent)
  return (
    <Fragment>
      <div className={`modal-backDrop ${isOpen? "modal-show": "modal-hide"}`} onClick={closeModelHandler}></div>
      <div className={`modal-container ${isOpen? "modal-show ": "modal-hide"}`} onClick={closeModelHandler}>
        <div className='modal-close'>
          <img src={CloseSVG} className='modal-close-img' alt='close-modal'
          onClick={closeModelHandler}
          />
        </div>
        <div className={`modal-content ${modelChildPosition}`}>{renderComponent}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
