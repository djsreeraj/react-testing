import React, { useState } from 'react'

const InputBox = ( { name = 'username'}) => {
    const [data, setData] = useState("")
  return (
    <input type="text" name={name} value={data} onChange={ (e) => setData(e.target.value)}  />
  )
}

export default InputBox
