import React,{useState} from 'react'
import styles from './Register.module.css'
import {useNavigate} from 'react-router-dom'
function Register() {
    const navigate = useNavigate()
    const[title, setTitle] = useState('Register')
    const [user,setUser] = useState({
        name:'',
        email:'',
        pwd:'',
        password2:'',
    })

    const onChange = function(e){
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onClick = function(e){
        //e.preventDefault()
        if (user.pwd !== user.password2){
            setTitle('비밀번호가 일치하지 않습니다')
            setUser({name:'',email:'',pwd:'',password2:'',})
        }/*
        else{
            navigate('/')
        }*/
    }
  return (
      <>
      <div className={styles.bg}>
          <div className={styles.container}>
            <form className={styles.form}>
                <h2>{title}</h2>
                <input className={styles.box} type='text' placeholder='enter your name' name='name' value={user.name} onChange={onChange}/>
                <input className={styles.box} type='email' placeholder='enter your email' name='email' value={user.email} onChange={onChange}/>
                <input className={styles.box} type='password' placeholder='enter your password' name='pwd' value={user.pwd} onChange={onChange}/>
                <input className={styles.box} type='password' placeholder='check your password' name='password2' value={user.password2} onChange={onChange}/>
                <div><input type='radio' name='gender' value='M'/><label>남성</label></div>
                <div><input type='radio' name='gender' value='F'/><label>여성</label></div>
                <button className={styles.btn} onClick={onClick}>Register</button>
            </form>
          </div>
      </div>
      </>
  )
}

export default Register