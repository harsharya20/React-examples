import React, { useState } from 'react'

const App = () => {
  const [inputs,setInputs] =useState()
  const [fullName,setfullName] = useState()
  const [lastName, setLastName ] = useState()
  const [newLast , setNewLast ] = useState()


  const inputEvent = (event) => {
    setInputs(event.target.value)
  }

  const inputEvent2 = (event) => {
    setLastName(event.target.value)
  }

   const onSubmit = (e) => {
     e.preventDefault()
     setfullName(inputs)
     setNewLast(lastName)
   }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
    <h1>Hello {fullName} {newLast}</h1>
    <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={inputs}/>
    <br />
    <input type="text" placeholder='Enter Your Last Name' onChange={inputEvent2} value={ lastName } />
    <button type='submit'>Click Me</button>
    </div>
    </form>
   
    </>
  )
}

export default App







// import React from "react";
// import { useState } from "react";


// const colors = {
//    fontSize: '200px'
//   }
// const App = () => {

// let time = new Date().toLocaleTimeString();

// const [ctime, setCtime ] = useState(time)

// const UpdateTime = () => {
//   time = new Date().toLocaleTimeString();
//   setCtime(time)
// }

// setInterval(UpdateTime,1000);
//   return (
//     <div style={colors}>{ctime}</div>
//   )
// }

// export default App




// const App = () => {
//   const [count, setCount ] = useState(0)
//   const Inc = () => {
//     setCount(count + 1)
//   }

//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={Inc}>Click</button>
   
//     </>
//   )
// }

// export default App

// const colors = {
//  display : 'block',
//  margin : '20px',
//  marginTop : '200px',
//  marginLeft: '-130px'
// }
// const App = () => {

//   const [time, setTime] = useState(new Date().toLocaleTimeString());
  
//   const curtime = () => {
//     setTime(new Date().toLocaleTimeString())
//   }
//   return (
//     <>
//     <h1>{time}</h1>
//     <button style = {colors} onClick={curtime}>Click</button>
    
//     </>
//   )
// }

// export default App
















// import React, { createContext } from 'react'
// import CompA from './CompA'


// const FirstName = createContext()
// const LastName = createContext()
// const App = () => {
//   return (
//     <>
//   <FirstName.Provider value={'Harsh'}>
//     <LastName.Provider value={'Arya'}>
//       <CompA /> 
//       </LastName.Provider>
//   </FirstName.Provider>
//   </>
//   )
// }

// export default App
// export { FirstName }
// export { LastName }