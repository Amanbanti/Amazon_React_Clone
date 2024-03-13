import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header (){
    const [{basket ,user},dispatch]= useStateValue();


    const handleAuth=()=>{
        if(user){
            auth.signOut()
        }
    }



    return(
        <div className='header'>
            <Link to='/'> <img className='header__logo' src='./images/amazon-logo-white.png' /></Link>
           
           
           
            <div className='header__search'>

                <input  className='header__searchInput' type='text'/>
                <img className='header_searchIcon' src='./images/search-icon.png' />
            
            </div>

            <div className='header__nav'>
                <Link to= {!user && '/login'} > 
               

                <div onClick={handleAuth} className='header__option'>
                    <span className='header__optionLineOne'>
                       
                   
                    {user ?  'Hello ' + user?.email : 'Hello Guest'}
                    </span>

                    <span className='header__optionLineTwo'>
                           {user ? 'Sign Out': 'Sign In'}
                    </span>

                        

                </div>

                </Link>
                
                <div className='header__option'>

                        <span className='header__optionLineOne'>
                            Returns
                        </span>

                        <span className='header__optionLineTwo'>
                            & Orders
                        </span>
            



                </div>


                <div className='header__option'>


                        <span className='header__optionLineOne'>
                                    Your
                            </span>

                            <span className='header__optionLineTwo'>
                                Prime
                            </span>
                    



                </div>

            <Link to='/checkout'>
                <div className='header__o ptionBasket'>
                        <img className='header__cartImg' src='./images/cart-icon.png'/>
                        <span className='header__optionLineTwo 
                        header__basketCount'>{basket?.length}</span>
                </div>

            </Link>





            </div>






        </div>

        
    )
}

export default Header;