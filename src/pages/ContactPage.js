import React, { useState } from 'react'

const ContactPage = () => {

    const [data, setData] = useState("")
  return (
    <div>
      <h1>Test Click Event Button</h1>
      <button onClick={() => {setData("Updated Data")}}> Update</button>
      <h2>{data}</h2>
    </div>
  )
}

export default ContactPage
