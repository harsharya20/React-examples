import React, { useState } from 'react'

const App = () => {
  const [fullName, setFullName] =useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  });
  


  const inputEvent = (event) => {
  const {value, name } = event.target;

   setFullName((prevValue) => {

    return{

      ...prevValue,
      [name]: value
    }

    // if(name === 'fName'){
    //   return{
    //   fname: value,
    //   lname: prevValue.lname,
    //   email: prevValue.email,
    //   phone: prevValue.phone

    //   }
    // }else if(name === 'lName'){
    //   return{
    //   fname: prevValue.fname,
    //   lname: value,
    //   email: prevValue.email,
    //   phone: prevValue.phone
    //   }
    // }else if(name === 'email'){
    //   return{
    //   fname: prevValue.fname,
    //   lname:prevValue.lname ,
    //   email: value,
    //   phone: prevValue.phone
    //   }
    // }
    // else if(name === 'phone'){
    //   return{
    //   fname: prevValue.fname,
    //   lname: prevValue.lname,
    //   email: prevValue.email,
    //   phone: value
    //   }
   // }
    })
  }


   const onSubmit = (e) => {
     e.preventDefault()
     alert('form submitted')
   }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
    <h1>Hello {fullName.fname} {fullName.lname}</h1>
    <p>{fullName.email}</p>
    <p>{fullName.phone}</p>
    <input type="text" placeholder='Enter Your Name' name= 'fname' onChange={inputEvent} value={fullName.fname}/>
    <br />
    <input type="text" placeholder='Enter Your Last Name' name= 'lname' onChange={inputEvent} value={fullName.lname}/>
    <br />
    <input type="email" placeholder='Enter Your Email' name= 'email' onChange={inputEvent} value={fullName.email} autoComplete='off'/>
    
    <input type="number" placeholder='Enter Your Phone Number' name= 'phone' onChange={inputEvent} value={fullName.phone}/>
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