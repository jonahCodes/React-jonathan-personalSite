import React, {Component} from 'react';
import '../public/css/main.css';
import Background from '../public/images/ecom.png';
export default class Index extends Component{
    render(){
        return(
            <div style={{marginTop:'250px'}}>

<div className="pageheader-content row">
        <div className="col-full">
        <div className="featured">

                    <div className="featured__column featured__column--big">
                        <div className="entry" style={{ backgroundImage:`url(${Background})` }}>
                            
                            <div className="entry__content">
                                <span className="entry__category"><a href="#0">Ecom</a></span>

                                <h1><a href="#0" title="" className="white">Ecommerce Website made with laravel and php.</a></h1>

                                <div className="entry__info">
                                  

                                    <ul className="entry__meta">
                                        <li><a href="#0" className="white">Made by John Codes</a></li>
                                        
                                    </ul>
                                </div>
                            </div> 
                            
                        </div> 
                    </div> 

                    <div className="featured__column featured__column--small">

                        <div className="entry" style={{ backgroundImage:`url(${Background})` }}>
                            
                            <div className="entry__content">
                                <span className="entry__category"><a href="#0" className="white">realestate</a></span>

                                <h1><a href="#0" title="" className="white">The realestate project</a></h1>

                                <div className="entry__info">
                                    <a href="#0" className="entry__profile-pic">
                                        <img className="avatar" src="images/avatars/user-03.jpg" alt=""/>
                                    </a>

                                   
                                </div>
                            </div> 

                        </div> 

                            <div className="entry" style={{ backgroundImage:`url(${Background})` }}>

                            <div className="entry__content">
                                <span className="entry__category"><a href="#0" className="white">LifeStyle</a></span>

                                <h1><a href="#0" title="" className="white">Coding new portfolio pages and blogs</a></h1>

                                <div className="entry__info">
                                    <a href="#0" className="entry__profile-pic">
                                        <img className="avatar" src="images/avatars/user-03.jpg" alt=""/>
                                    </a>

                                   
                                </div>
                            </div> 

                        </div> 

                    </div> 

                   
                </div> 
        </div>
        
        </div> 

        <section className="s-content">
            <div className="row masonry-wrap">
                <div className="masonry">
                    <div className="grid-sizer"></div>

<article className="masonry__brick entry format-standard" data-aos="fade-up">
        
        <div className="entry__thumb">
            <a href="single-standard.html" className="entry__thumb-link">
                <img src="images/thumbs/masonry/lamp-400.jpg" 
                        srcset="images/thumbs/masonry/lamp-400.jpg 1x, images/thumbs/masonry/lamp-800.jpg 2x" alt=""/>
            </a>
        </div>

        <div className="entry__text">
            <div className="entry__header">
                
                <div className="entry__date">
                    <a href="single-standard.html">December 15, 2017</a>
                </div>
                <h1 className="entry__title"><a href="single-standard.html">Just a Standard Format Post.</a></h1>
                
            </div>
            <div className="entry__excerpt">
                <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                </p>
            </div>
            <div className="entry__meta">
                <span className="entry__meta-links">
                    <a href="category.html">Design</a> 
                    <a href="category.html">Photography</a>
                </span>
            </div>
        </div>

    </article> 
    

    <article className="masonry__brick entry format-quote" data-aos="fade-up">
                        
                        <div className="entry__thumb">
                            <blockquote>
                                    <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>
        
                                    <cite>Dieter Rams</cite>
                            </blockquote>
                        </div>   
        
                    </article> 
                    <article className="masonry__brick entry format-standard" data-aos="fade-up">
        
        <div className="entry__thumb">
            <a href="single-standard.html" className="entry__thumb-link">
                <img src="images/thumbs/masonry/lamp-400.jpg" 
                        srcset="images/thumbs/masonry/lamp-400.jpg 1x, images/thumbs/masonry/lamp-800.jpg 2x" alt=""/>
            </a>
        </div>

        <div className="entry__text">
            <div className="entry__header">
                
                <div className="entry__date">
                    <a href="single-standard.html">December 15, 2017</a>
                </div>
                <h1 className="entry__title"><a href="single-standard.html">Just a Standard Format Post.</a></h1>
                
            </div>
            <div className="entry__excerpt">
                <p>
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                </p>
            </div>
            <div className="entry__meta">
                <span className="entry__meta-links">
                    <a href="category.html">Design</a> 
                    <a href="category.html">Photography</a>
                </span>
            </div>
        </div>

    </article> 
    
    
    </div>
    </div>
    </section>
        </div>


            
        )
    }
}