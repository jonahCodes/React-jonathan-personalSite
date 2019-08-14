import React,{ Component } from 'react'
import Navbar from './components/partials/navbar';
import Index from './components/indexMain.js';
import Footer from './components/partials/footer';
export default class App extends Component{
render(){
  return(
    <div>
        <Navbar />
        <Index />
        <Footer />
    </div>
  )
}
}

