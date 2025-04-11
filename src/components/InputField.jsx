import React, { useState } from 'react'

const InputField = ({type, placeholder, icon}) => {
    // State to toggle password visibility
    const [isPasswordShown, setIsPassowrdShown] = useState(false);
    const handleClick = () => {
        setIsPassowrdShown(!isPasswordShown);
    } 
  return (
    <div className="input-wrapper">
        <input 
        className="input-field" 
        type={isPasswordShown ? 'text' : type} 
        placeholder={placeholder} 
        required 
        />
        <i class="material-symbols-outlined">{icon}</i>
        {type === 'password' && (
            <i onClick={handleClick} class="material-symbols-outlined eye-icon">
                {isPasswordShown ? 'visibility' : 'visibility_off'}
            </i>
        )}
    </div>
  )
}

export default InputField