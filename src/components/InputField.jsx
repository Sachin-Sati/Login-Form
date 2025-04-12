import React, { useState } from 'react'

const InputField = ({type, placeholder, icon, name, onChange}) => {
    // State to toggle password visibility
    const [isPasswordShown, setIsPassowrdShown] = useState(false);
    const handleClick = () => {
        setIsPassowrdShown(!isPasswordShown);
    }
  return (
    <div className="input-wrapper">
        <input 
        className="input-field"
        name={name}
        type={isPasswordShown ? 'text' : type} 
        placeholder={placeholder} 
        required
        onChange={onChange}
        />
        <i className="material-symbols-outlined">{icon}</i>
        {type === 'password' && (
            <i onClick={handleClick} className="material-symbols-outlined eye-icon">
                {isPasswordShown ? 'visibility' : 'visibility_off'}
            </i>
        )}
    </div>
  )
}

export default InputField