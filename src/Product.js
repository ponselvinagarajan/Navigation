import {Link} from 'react-router-dom'
function Product(){
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
        <section id="construction">
	    <div class="container">
		    <div class="row">
			    <div class="col-12">
				    <div class="const_content">
					    <h1>Constructions</h1>
						<p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
					</div>
                </div>
                <div class="col-12">
					<div class="row">
					    <div class="col-6">
							<div class="construction_content" >
								<div class="img">
									<img src="image/const-1.jpg" width="100%" height="100%"/>
								</div>								
								<div class="content_text">
                                    <h2>Eligendi omnis sunt veritatis.</h2>	
                                    <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et</p>	
                                </div>
                            </div>
                        </div>
	
							<div class="col-6">
								<div class="construction_content" >
									<div class="img">
										<img src="image/const-2.jpg" width="100%" height="100%"/>
									</div>								
									<div class="content_text">
										<h2>Possimus ut sed velit assumenda</h2>	
										<p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>	
									</div>
								</div>
						    </div>

                    </div>
                </div>	
				<div class="col-12">
					<div class="row">
					    <div class="col-6">
							<div class="construction_content" >
								<div class="img">
									<img src="image/const-3.jpg" width="100%" height="100%"/>
								</div>								
								<div class="content_text">
                                    <h2>Error beatae dolor inventore aut</h2>	
                                    <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>	
                                </div>
                            </div>
					    </div>
							<div class="col-6">
								<div class="construction_content" >
									<div class="img">
										<img src="image/const-4.jpg" width="100%" height="100%"/>
									</div>								
									<div class="content_text">
										<h2>Possimus ut sed velit assumenda</h2>	
										<p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut him Eum dignissimos.</p>	
									</div>
								</div>
						    </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
 </div>                 
   )}     
   export default Product;