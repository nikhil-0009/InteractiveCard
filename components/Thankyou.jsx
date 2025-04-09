import React from 'react'
import InputDetails from './InputDetails';
const complete=new URL('../assets/images/icon-complete.svg', import.meta.url).href;
export const Thankyou = ({onContinue}) => {
  return (
    <div className='thankyou'>
        <img src={complete} alt="" style={{ display: 'block', margin: '0 auto' }} /><br />
        <h1 style={{ textAlign: 'center' }}>Thank You</h1><br />
        <p> We have added your Card Details</p><br />
        <button className='confirm' onClick={onContinue} style={{ display: 'block', margin: '0 auto' }}> Continue</button>
        </div>
  )
}
