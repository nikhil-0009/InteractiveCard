import React, { useState } from 'react'
import { Thankyou } from './Thankyou'

 const InputDetails = ({ formData, setFormData,Submitted,setSubmitted }) => {
      const [errors,setErrors]=useState({})
    const formatCardNum=(value)=>{
        return value
        .replace(/\D/g, "") // Remove non-numeric characters
        .replace(/(.{4})/g, "$1 ") // Add space after every 4 digits
        .trim(); // Remove trailing spaces
    }

    const handleChange=(e)=>{
        const {name,value}=e.target
        // console.log(name,value);
        setFormData((prev)=>({
            ...prev, [name]:name==='cardNum'? formatCardNum(value) : value
        }))
    }
    const validation=()=>{
        const err={}
        if(!formData.cardHolderName.trim()) err.cardHolderName='Name is required'
        if(!formData.cardNum.match(/^(\d{4} ){3}\d{4}$/)) err.cardNum = 'Invalid card number';
        if (!formData.expireMonth || formData.expireMonth > 12) err.expireMonth = 'Invalid month';
        if (!formData.expireYear) err.expireYear = 'Year is required';
        if (!formData.cvv.match(/^\d{3}$/)) err.cvv = 'CVV must be 3 digits';

        return err
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const validationErrors=validation()
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            // console.log('Form Submitted:', formData);
            setSubmitted(true)
            
          }
    }
  return Submitted ? (<Thankyou />):(<div className='inputdetails'>
            <form onSubmit={handleSubmit}>
              <div className='name'>
                <label htmlFor='cardHolderName'>Cardholder Name</label><br />
                <input
                  type='text'
                  id='cardHolderName'
                  name='cardHolderName'
                  placeholder='e.g. JANE APPLESEED'
                  value={formData.cardHolderName}
                  onChange={handleChange}
                />
                {errors.cardHolderName && <p className='error'>{errors.cardHolderName}</p>}
              </div>
      
              <div className='cardnum'>
                <label htmlFor='cardNum'>Card Number</label><br />
                <input
                  type='text'
                  id='cardNum'
                  name='cardNum'
                  placeholder='e.g. 1234 5678 9123 0000'
                  value={formData.cardNum}
                  maxLength='19'
                  onChange={handleChange}
                />
                {errors.cardNum && <p className='error'>{errors.cardNum}</p>}
              </div>
      
              <div className='last'>
                <div className='expMonth'>
                  <label>Expiry Date (MM/YY)</label><br />
                  <input
                    className='date'
                    name='expireMonth'
                    placeholder='MM'
                    maxLength='2'
                    value={formData.expireMonth}
                    onChange={handleChange}
                  />
                  <input
                    className='date'
                    name='expireYear'
                    placeholder='YY'
                    maxLength='2'
                    value={formData.expireYear}
                    onChange={handleChange}
                  />
                  {(errors.expireMonth || errors.expireYear) && (
                    <p className='error'>
                      {errors.expireMonth || errors.expireYear}
                    </p>
                  )}
                </div>
      
                <div >
                  <label htmlFor='cvv'>CVV</label><br />
                  <input
                    className='cvv'
                    id='cvv'
                    name='cvv'
                    type='text'
                    placeholder='e.g. 123'
                    maxLength='3'
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                  {errors.cvv && <p className='error'>{errors.cvv}</p>}
                </div>
              </div>
      
              <button className='confirm'>Confirm</button>
            </form>
          </div>)
                
  
}
export default InputDetails