import React, { useState } from 'react'

const ContactPage = () => {

    const [data, setData] = useState("")
  return (
    <div>
      <h1>Test Click Event Button</h1>
      <button onClick={() => {setData("Updated Data")}}> </button>
      <h1>{data}</h1>
    </div>
  )
}

export default ContactPage
