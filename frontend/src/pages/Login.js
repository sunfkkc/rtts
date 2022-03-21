import React ,{useState, useEffect}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './Login.module.css'
function Login() {

    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        email:'',
        pw:'',
    })
    const {email, pw} = loginData
    const onSubmit = function(e){
        e.preventDefault();

        if(!email || !pw ){
            return alert("Please add all fields")
        }
        const userData = {email:email, pw:pw}
        fetch('/api/members/login',{
            //폼 데이터 fetch 
            method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
        }).then((response) => {
            if(response.status == 200){
                navigate('/home')
            }
            else{
                alert(`오류 발생 Status : ${response.status}`)
            }
        })
        
    }
    const onChange = function(e){
        setLoginData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
  return (
      <>
      <div className={styles.bg}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.title}>
            <h1><font color="red">R</font>un-<font color="red">T</font>ogether</h1>
            </div>
            <h2>Email address</h2>
            <input className={styles.box} type="email" name='email' placeholder='Enter your email' onChange={onChange}/>
            <h2>Password</h2>
            <input className={styles.box} type="password" name='pw' placeholder='Enter your password' onChange={onChange}/>

            <button type='submit' className={styles.btn}>로그인</button>
            <Link to='/register'>
            <button className={styles.btn}>회원가입</button>
            </Link>
        </form>
      </div>
      </div>
</>
  )
}

export default Login