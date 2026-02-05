import React from 'react'
import Index from './Routes'
import { Provider } from 'react-redux'
import { Store } from './App/store'

const App = () => {
  return (
     <Provider store={Store}>
       <Index />
     </Provider>
  )
}

export default App