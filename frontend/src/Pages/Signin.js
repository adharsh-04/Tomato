import React from 'react'
import {useForm} from 'react-hook-form'
import './Signin.css'

function Signin() {
    let {register,handleSubmit}=useForm();

    function handleFormSubmit(userObj){
        console.log(userObj);
    }
  return (
   
    <div id='body1' className=''>
        <div className='image-form text-dark'>
            <img id='image-f' src='https://cdn.pixabay.com/photo/2017/08/05/12/33/flat-lay-2583213_640.jpg' alt=''/>
        </div>
        <form className='d-block mx-auto w-25   fs-5 ' style={{fontFamily:"italic"}}id='form' onSubmit={handleSubmit(handleFormSubmit)}>
            <h1 className='text-center '>Login form</h1>
            <label htmlFor='userType'>Login as</label>
            <br></br>
            <div className='m-3 d-flex'>
                <div className='me-3'>
            <input type='radio' value='user' id='user' name='userType' {...register('userType',{required:true})}/>
            <label htmlFor='user'>User</label>
            </div>
            <div className='me-3'>
            <input type='radio' value='author' id='author' name='userType'{...register('userType',{required:true})}/>
            <label htmlFor='author'>Author</label>
            </div>
            </div>
            <div className='m-3'>
                <label htmlFor='username' className='form-label'>Username</label>
                <input className='form-control' id='username' placeholder='Enter Username' {...register('username',{required:true})}/>
            </div>
            <div className='m-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input className='form-control' id='password' placeholder='Enter Password' {...register('password',{required:true})}/>
            </div>
            <button type='submit' className='btn btn-warning d-block mx-auto'>Login</button>
        </form>
    </div>
  )
}

export default Signin