import React ,{useState, useEffect}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './Login.module.css'

interface longinData{
    email:string,
    pw:string,
}

function Login() {

    const navigate = useNavigate()
    const [loginData, setLoginData] = useState<longinData>({
        email:'',
        pw:'',
    })
    const {email, pw} = loginData
    const onSubmit = function(e:React.FormEvent){
        e.preventDefault();

        if(!email || !pw ){
            return alert("Please add all fields")
        }
        const userData = {email:email, pwd:pw}

        
        fetch('/api/login',{
            //폼 데이터 fetch 
            method:'POST',
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(userData),
        }).then((response) => {
            if(response.ok){
                response.json()
                navigate('/home')
            }
            else{
                alert(`오류 발생 Status : ${response.status}`)
            }
        })
        /*response.json())
        .then(message=>{alert(message.message)})*/
        
        
    }
    const onChange = function(e:React.ChangeEvent<HTMLInputElement>){
        setLoginData(prevState=>({
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
                <h1>Run-Together</h1>
            </div>
            <h2>Email address</h2>
            <input className={styles.box} type="email" name='email' placeholder='Enter your email' onChange={onChange}/>
            <h2>Password</h2>
            <input className={styles.box} type="password" name='pw' placeholder='Enter your password' onChange={onChange}/>
            <div className='margin'>
                <button type='submit' className={styles.btn}>로그인</button>
            </div>
            <div>
                <Link to='/register'>
                <button className={styles.btn}>회원가입</button>
                </Link>
            </div>
            
        </form>
      </div>
      </div>
</>
  )
}

export default Login