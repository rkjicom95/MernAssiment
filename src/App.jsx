import React from 'react'
import Navbar from './components/Navbar'
import Clients from './components/Clients'
import Form from './components/Form'

const App = () => {
  return (
    <div>
      <Navbar/>
     <div className='data'>
     <Clients/>
     <Form/>
     </div>
    </div>
  )
}

export default App