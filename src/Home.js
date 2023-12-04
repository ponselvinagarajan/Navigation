import React from 'react'
import {Link} from 'react-router-dom'


function Home(){
    return(
        <div>
        <div>
            <nav className='navlist'>
            <Link to='/'>Home</Link>
            <Link to='/About' >About</Link>
            <Link to='/Product' >Product</Link>
            <Link to='/Contact'>Contact</Link>
            </nav>
        </div>
        <section id="header_section" class="header_img">
        <div class="head_content">
					    <h1>Welcome to UpConstruction</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div class="btn_secondary">
						    <a href="#">Get Started</a>
						</div>	
		            </div>
                    </section>
            
            </div>
       
    )
   
}
export default Home;