import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/login.css'
// import toast from 'react-hot-toast'
// import Home from './Home';
const init = {
  email:'',
  pass:""

}
function Login() {
  const[body , setBody] = useState(init);
  const [login , setLogin] = useState(false);
  const{ email , pass} = body;
  const[keyd , setKeyd] = useState()
  const handleChange = (e)=>{
    setBody({...body ,[e.target.name]:e.target.value})

  }
  useEffect(()=>{
    const getData = async()=>{
      try{
        const {data} = await axios.get('http://localhost:300/api/register/get-all')
        setKeyd(data)      
      }catch(e){
        console.log(e);
      }
    }
    getData()
  },[])
  const submitHandle = async(e)=>{
    e.preventDefault()  
    let flag=false;
         if( pass!='' && email!=''){
          for(let i=0; i<keyd.length-1; i++)
          {
              if (keyd[i]['pass']==pass && keyd[i]['email']==email){
                flag=true;
                break;
              }
              else{
             
                  flag=false;
              }
          }
          if(flag){
            toast.success("Welcome Legend ");
            setLogin(!login)
          }
          else{
            toast.error('Sorry! you are not registered, Sign Up First')
          }
         }
         else {
          toast.error("please fill all the fields")
         }
  }
  if(login){return <Home/>}
  return (
    <div className='container m-4'>
 <form className='spaces shadow-lg' onSubmit={submitHandle}>
 <div className='my-3'>
    <label htmlFor="">Email</label>
    <input type="email"  placeholder='Enter Email ' className='form-control  p-3'
      name='email'
      value={email}
      onChange={handleChange}
    />
    </div>
    <div className='my-3'>
    <label htmlFor="">Password</label>
    <input type="password"  placeholder='Enter Password ' className='form-control  p-3'
      name='pass'
      value={pass}
      onChange={handleChange}
    />
    </div>
      <button type='submit' className='btn btn-success form-control '>Login</button>
      </form>
    </div>
  )
}


export default Login