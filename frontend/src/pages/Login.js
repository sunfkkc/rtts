import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Login.module.css'
function Login() {

  return (
      <>
      <div className={styles.bg}>
      <div className='container'>
        <form action='#' method='post'>
            <h2>Email address</h2>
            <input className='loginInput' type="email" name='email' placeholder='enter your email'/>
            <h2>Password</h2>
            <input className='loginInput' type="password" name='password' placeholder='enter your password' />
            <div >
            <button type='submit' className='btn loginbtn'>로그인</button>
            </div>
            <Link to='/register'>
            <div >
            <button className='btn registerbtn'>회원가입</button>
            </div>
            </Link>
        </form>
      </div>
      </div>
</>
  )
}

export default Login