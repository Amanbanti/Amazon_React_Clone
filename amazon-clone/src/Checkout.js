import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';
function Checkout(){
    
    const [{basket,user},dispatch]= useStateValue();
    return(
        <div className='checkout'>
            <div className='checkout__left'>
                    <img className='checkout__ad' src='./images/add.jpg'/>
                    <div>
                        <h3>Hello,{user?.email}</h3>
                        <h2 className='checkout__title'>
                            Your Shopping Basket
                        </h2>


                        {basket.map(item =>(
                            <CheckOutProduct

                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            
                            />
                        ))}

               








                    </div>
            </div>

            <div className='checkOut__right'>

                <Subtotal/>


            </div>

            



        </div>
    )
}
export default  Checkout;
