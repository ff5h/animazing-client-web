import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from '~/types/user';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setTimeout(() => {}, 500);
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'exception',
      });
    }
  };
};
