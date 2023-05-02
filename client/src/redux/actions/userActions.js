import axios from 'axios';

export const loadUser = () => async(dispatch) => {
    try {
        dispatch({
            type: 'loadUserRequest'
        });
        const {data} = await axios.get('/users/me');

        dispatch({
            type: 'loadUserSuccess',
            payload: data.user
        });

    } catch (error) {
        dispatch({
            type:'loadUserFailure',
            payload: error.response?.data.message
        });
    }
}

export const logout = () => async(dispatch) => {
    try {
        dispatch({
            type: 'logoutRequest'
        });
        const {data} = await axios.get('/users/logout');

        dispatch({
            type: 'logoutSuccess',
            payload: data.message
        });

    } catch (error) {
        dispatch({
            type:'logoutFailure',
            payload: error.response?.data.message
        });
    }
}