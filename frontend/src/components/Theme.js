import React,{Component} from 'react'
// import createForm from './Form'
import { Link } from 'react-router-dom'


export default class Home extends Component{
  state={

  }
  render(){
    return(
      <div>
        <section id="header">
      <header className="major">
        <Link to="/"><h1>PROGUE</h1></Link>
       
      </header>
      <div className="container">
        <ul className="actions special">
          <li><a href="#one" className="button primary scrolly">Begin</a></li>
        </ul>
      </div>
    </section>

  
     <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary"><img src="images/pic01.jpg" alt="" /></span>
        <div className="content">
          <header className="major">
            <h2>simplBlog app</h2>
          </header>
          <p>This App is a blog web mobile using responsive practice and React js combined with a Backend making it called the MERN stack.
             </p>
            
            <Link to="/create" > 
           <a className="button primary" href='#two' name="jonathan">Add blog</a> 
                </Link>
              
        </div>
        <a href="#two" className="goto-next scrolly">Next</a>
      </div>
    </section> 

        </div>
    )
  }
}