import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import Footer from './Footer'
import FormList from './formlist'


const App = () => (
  <div>
    <Main />
    <FormList />
    <Footer />
  </div>
)

export default App
