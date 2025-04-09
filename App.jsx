import React, { useState } from 'react'
import FrontCard from './components/FrontCard';
import './App.css'
import BackCard from './components/BackCard';
import InputDetails from './components/InputDetails';
import { Thankyou } from './components/Thankyou';

const App = () => {
  const [formData, setFormData] = useState({
          cardHolderName: '',
          cardNum: '',
          expireMonth: '',
          expireYear: '',
          cvv: ''
        });
        const [Submitted,setSubmitted]=useState(false)
  return (
    <div>
        <FrontCard formData={formData} />
        <BackCard formData={formData} />
        {
  Submitted ? (
    <Thankyou onContinue={() => {
      // Reset form
      setFormData({
        cardHolderName: '',
        cardNum: '',
        expireMonth: '',
        expireYear: '',
        cvv: ''
      });
      setSubmitted(false);
    }} />
  ) : (
    <InputDetails
      formData={formData}
      setFormData={setFormData}
      Submitted={Submitted}
      setSubmitted={setSubmitted}
    />
  )
}
    </div>
  )
}

export default App