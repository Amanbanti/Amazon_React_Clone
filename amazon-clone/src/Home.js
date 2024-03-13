import React from 'react';
import './Home.css'
import Product from './Product';
function Home(){
    return(
        <div className='home'>
             <div className='home__container'>
                
                <img className='home__image'
                
                src='images/bg_img.jpg'
            
                />

                <div className='home__row'>
                    <Product id="1" title="Vanity Mirror Silver" price={9.99} image=
                        
                        'images/products/vanity-mirror-silver.jpg'
                        rating={5}
                    />
                    <Product
                       id="2" title="Coffeemaker With Glass Carafe" price={69.99} image=
                        
                        'images/products/coffeemaker-with-glass-carafe-black.jpg'
                        rating={4}
                    
                    
                    
                    />
                    
                </div>


                
                <div className='home__row'>
                     <Product

                        id="3" title="Men Cozy Fleece Zip-up Hoodie" price={34.99} image=
                                                
                        'images/products/men-cozy-fleece-zip-up-hoodie-red.jpg'
                        rating={3}
                                            
                     
                     />
                     <Product
                     
                     id="4" title="Knit Athletic Sneakers " price={69.99} image=
                                                
                     'images/products/knit-athletic-sneakers-gray.jpg'
                     rating={5}
                     
                     />
                     <Product
                          id="5" title="Luxury Tower " price={12.99} image=
                                                
                          'images/products/variations/luxury-tower-set-4-piece.jpg'
                          rating={5}
                          
                        
                     
                     />
                     
                </div>


                
                <div className='home__row'>
                <Product
                
                id="6" title="Men Navigator Sunglasses-Silver " price={19.99} image=
                                                
                'images/products/variations/men-navigator-sunglasses-silver.jpg'
                rating={4}
                
                
                />
                     
                </div>

             </div>
        </div>
    )
}

export default Home;