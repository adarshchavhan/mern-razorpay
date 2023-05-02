import axios from 'axios';

export const createOrder = (orderData) => async(dispatch) => {
    try {
        dispatch({
            type: 'createOrderRequest'
        });
        const {data} = await axios.post('/orders/placeorder', orderData);

        dispatch({
            type: 'createOrderSuccess',
            payload: data.message
        });

    } catch (error) {
        dispatch({
            type:'createOrderFailure',
            payload: error.response?.data.message
        });
    }
}

export const paymentVarification = (orderData) => async(dispatch) => {
    
    try {
        dispatch({
            type: 'paymentVerificationRequest'
        });
        const {data} = await axios.post('/orders/payment/verification', orderData);

        dispatch({
            type: 'paymentVerificationSuccess',
            payload: data.message
        });

    } catch (error) {
        dispatch({
            type:'paymentVerificationFailure',
            payload: error.response?.data.message
        });
    }
}
