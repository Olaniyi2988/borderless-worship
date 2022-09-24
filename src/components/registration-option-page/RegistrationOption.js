import React from 'react'
import regOptImg from '../../images/reg-option-img.png'




const RegistrationOption = () => {
    

    const bgImg = {
        backgroundImage: `url("${regOptImg}")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
    }


    
  return (

    <div className=" box-border">
        <div className="w-3/5 h-full" style={bgImg}></div>
        <div className="w-2/5"></div>
    </div>
   
  )
}

export default RegistrationOption