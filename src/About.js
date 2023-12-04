import {Link} from 'react-router-dom'
function About(){
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
        <section id="about_section">	
	    <div class="container">
		    <div class="row">
			    <div class="col-12">
				    <div class="row">
				        <div class="col-6">
							<div class="banner_content">
								<h1>Minus hic non reiciendis ea possimus at quia.</h1>
								<p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.</p>
								<p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>			
							</div>
						</div>	
					    <div class="col-6">
							<div class="content_details">
								<h3>GET A QUOTE</h3>
								<p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
								<div class="details">
						            <input type="text" class="text_item" value="Name"/>
								</div>
								<div class="details">
								    <input type="text" class="text_item" value="Email"/>
								</div>
								<div class="details">
								    <input type="text" class="text_item" value="Phone"/>
								</div>
								<div class="details">
								    <textarea id="Message" class="text_item1" value="Message">Message</textarea>
								</div>
								<div class="btn_sec">
									<a href="#">Get a quote</a>
								</div>
							</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>		

        </div>
        
    )
}
export default About;