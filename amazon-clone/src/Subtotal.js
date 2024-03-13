import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
   const history= useNavigate();//give us the broweser History
  const [{ basket }] = useStateValue();
  const itemCount = basket?.length;
  const subtotal = getBasketTotal(basket);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({itemCount} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType='text'
        thousandSeparator={true}
        prefix='$'
      />

      <button onClick={e=>  history('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;