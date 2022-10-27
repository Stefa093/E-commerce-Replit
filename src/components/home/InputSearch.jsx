import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({setInputText, inputText}) => {

    const handleChange = e => {
        setInputText(e.target.value) 
    }

  return (
    <div>
      <input className='input' value={inputText} onChange={handleChange} type="text" placeholder='Search your products...' />
    </div>
  )
}

export default InputSearch