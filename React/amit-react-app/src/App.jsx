import React from 'react'
import products  from './products' 

// ye basically ek component hai 
// component ek function hota hai jo jsx return krta hai 
//jsx = ye basically html jaise dhikhne wala hota hai with some super powers 
function App() {
  return (
    <div className="w-full h-full bg-amber-900">
     
        <h1 className="text-5xl font-bold text-black">AMIT SINGH</h1>
       <products/>
      
    </div>
  )
}

export default App
