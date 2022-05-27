import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { userActions } from '../../../../actions/user.actions';
import {cookiesUtil} from '../../../../utilities'
const Login = () => {

  const dispatch = useDispatch();
  const authentication = useSelector((state)=> state.userReducer)

  function HandleSignInButtonOnClick()
  {
    cookiesUtil.set('THIS IS USER IDENTIFY KEY', "haizz")
    dispatch(userActions.login("username", "password", ()=>{console.log("ahihi")}))
    console.log(authentication)
  }

  if (authentication.isLoggedIn)
  return <Navigate to='/trang-chu'/>


  return (
    <>
    <div className="">
      <h1>This is login page</h1>
      <button onClick={()=>{
        HandleSignInButtonOnClick()
      }}>Sign in</button>
    </div>
    </>
  )
}

export default Login
