export const initialState={
    basket:[],
    user:null
}

export const getBasketTotal=(basket)=>{
  return  basket?.reduce((amount,item)=>item.price + amount,0) 



}


const reducer =(state ,action) =>{
    console.log(action);
    switch(action.type){
        case'ADD_TO_BASKET':

        return{
            ...state,basket:[...state.basket,action.item],
        }

        case 'REMOVE_FROM_BASKET':
            
              const index = state.basket.findIndex(
                (basketItem)=> basketItem.id ===action.id
              )

              var newBasket= [...state.basket ];

                if(index >= 0){
                    newBasket.splice(index,1);

                }else{ 
                    console.warn(
                        'cant remove product (id: '+ action.id + ' as its not in basket! ' 
                    )
                  

                }

                return{
                    ...state,
                    basket:newBasket
                }

        case 'SET_USER':


        default:
            return{
                ...state,
                user:action.user
            }
    }
}

export default reducer;