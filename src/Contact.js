import {Link} from 'react-router-dom'
function Contact(){
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
        
        <section id="provident_section">
        <div class="container">	
		    <div class="row">
			    <div class="col-12">
				    <div class="nav">
					    <a href="#" class="nav1">Modisit</a>
						<a href="#" class="nav2">paresenti</a>   
					    <a href="#" class="nav3">Explica</a>
                		<a href="#" class="nav4">Nostrum</a>		
					</div>	
				</div>
                <div class="col-6">
                    <div class="provident_cont">
                        <h2>Voluptatem dignissimos provident</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<p><i class="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p><i class="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
						<p><i class="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
					</div>
                </div>
				<div class="col-6">
				    <div class="provident_img">
					    <img src="image/features-1.jpg"/>
					</div>
				</div>
            </div>
        </div>
    </section>	

        </div>
    )
}
export default Contact;