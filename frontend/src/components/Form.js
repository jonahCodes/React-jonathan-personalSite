import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import './forms.css'
import axios from 'axios'
export default class CreateForm extends Component{
  //   state={

  //   }
  //   componentDidMount(){
  //     axios.post
  //   }
  // handleSubmit=()=>{

  // }
  render(){
    return(
      <div>
       <section id="header">
      <header className="major">
        <Link to="/"><h1>Highlights</h1></Link>
       
      </header>
      <div className="container">
        <ul className="actions special">
          <li><a href="#one" className="button primary scrolly">Begin</a></li>
        </ul>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary"><img src="images/pic02.jpg" alt=""/></span>
        <div className="content">
        <form name="login-form" className="login-form" action="" method="post">
            
              <div className="header">
              <h1>Welcome to this Site</h1>
              <span>Please, fill this form</span>
              </div>
            
              <div className="content">
              <input name="username" type="text" className="input username" placeholder="URL IMAGE" />
              <div className="user-icon"></div>
              <input name="Decription" type="textbox" className="input password" placeholder="Description" />
              <div className="pass-icon"></div>		
              </div>

              <a href="/" className="button form" >Add blog</a>
            
	
	</form>
         
        </div>

      </div>
    </section>

        </div>
    )
  }
}