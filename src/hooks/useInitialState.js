import { useState } from 'react';


const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addtocart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => items.id != payload.id),
        });
    }

    return {
        state,
        addtocart,
        removeFromCart
    }
}


export default useInitialState;