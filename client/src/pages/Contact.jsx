import React from 'react'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
const init = {
  email:"",
  subject:"",
  message:""
}
function Contact() {
  const[data , setdata] = useState({init});
  const{email, subject, message} = data
  const handleChange = (e)=>{
    setdata({...data,[e.target.name]:e.target.value})
    // console.log(data);
  }
  const save = async(e)=>{
    e.preventDefault()
    try{
      if(subject=='' || email==''  || message=='' ){     
        toast.error('You Must Fill All Fields')
      }
      else{
        const {save} = await axios.post('http://localhost:3000/api/contact' , data)
        setdata(init)
        toast.success('Thank for Your Messaging We Will reply You as soon')
      }
     
    }catch(e){
      toast.error('Sorry something went wrong')
    }
  }
  return (
    <div className='container my-5'>
      <div className="row shadow-lg">
        <div className="col-4 bg-light">
         <div className='text-dark my-4'>
         <h1>Contact Us</h1>
          <p>If you have any question or simply want to contact with us
          </p>
       
         </div>
      <div className='text-dark my-4'>
      <FiPhone/> <span>+1234</span>
         <div>
         <AiOutlineMail/> <span>casrionline@info.com</span>
      </div>
         </div>
         <div className='d-flex justify-content-around text-light my-4 '>
         <AiFillGithub/>
         <BsFacebook/>
         <AiFillTwitterCircle/>    
         <SiGmail/>   
          </div> 
        </div>
        <div className="col-8 bg-light">
            <form className='my-4' onSubmit={save} >
              <div className="my-2 mx-4">
              <input type="text"  placeholder='Enter Your Email ' className='form-control p-3'
               name='email'
               onChange={handleChange}
               value={email}/>
              </div>
         
          <div className="my-2 mx-4">
          <label htmlFor=""> Subject</label>
            <input type="text"  placeholder='Subject ' className='form-control p-3'
               name='subject'
               onChange={handleChange}
               value={subject}/>
          </div>
          
          <div className="my-2 mx-4">
          <label htmlFor=""> Message</label>
            <textarea type="text" rows='4' placeholder='Enter Your Message Here ' className='form-control p-3'
               name='message'
               onChange={handleChange}
               value={message}/>
          </div>
         
          <div className='d-flex justify-content-end my-3 '>
          <button type='submit' className='btn btn-dark mx-4' onChange={(handleChange)}>Submit</button>
          </div>
            </form>
          
           </div>
      </div>
  
    </div>
  )
}

export default Contact