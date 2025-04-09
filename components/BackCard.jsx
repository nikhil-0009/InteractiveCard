import React from 'react'

 const BackCard = ({formData}) => {
  const{cvv}=formData
  return (
    <div className='backmain'>
        <p className='cvvdetails'>{cvv?cvv:'000'}</p>
    </div>
  )
}
export default BackCard