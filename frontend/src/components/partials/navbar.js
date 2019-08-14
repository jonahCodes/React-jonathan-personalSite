import React,{Component} from 'react';
import '../../public/css/main.css';
export default class Navbar extends Component{
    render(){

        
        return(
            
<div>


<div className="header">
<div className="header_content row">
<div className="header__logo">

    <a className="logo" href="/">
        <h1 className='white'>Jonah Aquino</h1>
    </a>
</div> 

<ul className="header__social">
    <li>
        <a href="#0"><i className="fa fa-facebook" aria-hidden="true"></i></a>
    </li>
    <li>
        <a href="#0"><i className="fa fa-twitter" aria-hidden="true"></i></a>
    </li>
    <li>
        <a href="#0"><i className="fa fa-instagram" aria-hidden="true"></i></a>
    </li>
    <li>
        <a href="#0"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
    </li>
</ul>


  
</div>
<a className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>

<nav className="header__nav-wrap">

    <h2 className="header__nav-heading h6">Site Navigation</h2>

    <ul className="header__nav">
        <li className="current"><a href="index.html" title="">Home</a></li>      
        <li><a href="about.html" title="">About</a></li>
        <li><a href="contact.html" title="">Contact</a></li>
    </ul> 

    <a href="#0" title="Close Menu" className="header__overlay-close close-mobile-menu">Close</a>

</nav> 
</div>




       </div>     
            
            
        )
    }
}