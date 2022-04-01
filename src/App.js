import React, { createContext } from 'react'
import CompA from './CompA'


const FirstName = createContext()
const LastName = createContext()
const App = () => {
  return (
    <>
  <FirstName.Provider value={'Harsh'}>
    <LastName.Provider value={'Arya'}>
      <CompA /> 
      </LastName.Provider>
  </FirstName.Provider>
  </>
  )
}

export default App
export { FirstName }
export { LastName }