import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import '../styles/cart.css'
function Carts({data, setData}) {

  const initPayments={
    evc: false,
   
  }
  const [counter, setCounter]=useState(1)
  const [price, setPrice]=useState(0)
  const [update, setUpdate]=useState(false)
  const [paymentMethod, setPaymentMethod]=useState(initPayments)
  const [phone, setPhone]=useState('')
  const [loading, setLoading]=useState(false)

  const increment=()=>{
    setCounter(counter+1)
  }

  const handlePrice=()=>{
    let sum=0;
    data.map((element, index)=>{
     sum+=element.price  * element.amount;
    //  setUpdate(!update)
    })
    setPrice(sum)
  }

  useEffect(() => {
    handlePrice()
  })

 const DeleteHandle=(_id)=>{
  var keyd=0;
  const arr=data.filter((element)=> element._id!==_id);
  setData(arr)
  // data.map((item)=>{
  //    keyd=item.price*1
  //   })
  //   setData(keyd)
  // handlePrice()
  // setUpdate(!update)
  // setData(arr)
 }

 const submitHandle=(e)=>{
  e.preventDefault();
  processPayment()
  setPhone('')
  



 }

 //here

 const handleChange = (item, op) =>{
  let ind = -1;
  data.forEach((data, index)=>{
    if (data._id === item._id)
      ind = index;
  });
  const tempArr = data;
  tempArr[ind].amount += op;
  if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
  setData([...tempArr])
}
  return (
      <div className='container row main'>
        <div className="col-9 ">
        {!data.length>0 ? <h1>No items Selected</h1>

        : data.map((item, index) =>(
       <div className=" sub-main" key={index}>
         <div className="img">
            <img
             style={{ objectFit: "fill" }}
             height={100}
             width={100} 
             src={item.image} alt="" />
         </div>
        <div className="name">
         <span>{item.itemName}</span>
        </div>
        <div className="price">
          <span>${item.price}</span>
        </div>
<div className="threes">
<div className="btns">
        <button className='btn btn-primary' onClick={()=>handleChange(item, -1)}> - </button>
</div>
<div className="btns">
        <p>{item.amount}</p>
</div>
<div className="btns">
        <button className='btn btn-primary' onClick={()=>handleChange(item,+1)}> + </button>
</div>
</div>
<div className="delbtn">
      <button className='btn btn-danger' onClick={()=>DeleteHandle(item._id)}>Delete</button>
</div>
        </div>
     
      ))
      }  
        {
          price >0? <div className="totals my-3">
          <div className="txt">
            <h3>Total Price of all carts</h3>
          </div>
          <div className="price">
            {
              <h2>${price}</h2>
            }
          </div>
        </div> : ''
        }
      </div>
      <div className="col-3">
       {
        !data.length>0 ? '' : 
        <>
        <h4 className='container'>Pay with</h4>
        <div className="payments">
            
         
           <div className={`payment ${paymentMethod.evc && "selected"}`}>
          <h5 onClick={()=> setPaymentMethod({...initPayments, evc:true})}>Evc Plus</h5> 
           </div>
           
             
          
          <form onSubmit={submitHandle}>
            <input type="text" placeholder='2526....' className='input' onChange={(e)=>setPhone(e.target.value)} value={phone}/> <br />
            <button className='sends' type='submit'>
              {`${loading ? "Sending.." : "Process"}`}
            </button>
          </form>
          </div>
          </>
       }
            </div>
          </div>

    
 
        
  )
}

export default Carts