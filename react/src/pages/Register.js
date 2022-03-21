import React,{useState, useEffect} from 'react'
import styles from './Register.module.css'
import {useNavigate} from 'react-router-dom'
function Register() {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:'',
        email:'',
        pw:'',
        password2:'',
        gender:'',
    })
    const {name, email, pw, password2, gender} = user

    const onChange = function(e){
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = function(e){
        e.preventDefault();
        
        if(!name || !email || !pw || !password2 || !gender){
            return alert("Please add all fields")
        }


        if (pw !== password2){
            alert('비밀번호가 일치하지 않습니다')
            //setUser({name:'',email:'',pw:'',password2:'',})
        }
        else{
            const userData = {name:name,email:email,pw:pw,gender:gender}
            
            fetch('/members/new',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            }).then((response) => {
                if(response.status == 200){
                    alert('회원가입 성공')
                    navigate('/')
                }
                else{
                    alert(`오류 발생 Status : ${response.status}`)
                }
            })
            .catch((error) => {alert(error.message);})
            
        }
    }
  return (
      <>
      <div className={styles.bg}>
          <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h2>Register</h2>
                <input className={styles.box} type='text' placeholder='Enter your name' name='name' value={user.name} onChange={onChange}/>
                <input className={styles.box} type='email' placeholder='Enter your email' name='email' value={user.email} onChange={onChange}/>
                <input className={styles.box} type='password' placeholder='Enter your password' name='pw' value={user.pw} onChange={onChange}/>
                <input className={styles.box} type='password' placeholder='Check your password' name='password2' value={user.password2} onChange={onChange}/>
                <div className={styles.radio}><input type='radio' name='gender' value='M' onChange={onChange}/><label>남성</label></div>
                <div className={styles.radio}><input type='radio' name='gender' value='F' onChange={onChange}/><label>여성</label></div>
                <button type='submit' className={styles.btn} >Register</button>
            </form>
          </div>
      </div>
      </>
  )
}

export default Register