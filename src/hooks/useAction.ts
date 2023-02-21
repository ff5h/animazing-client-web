import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as USerActionCreators from '../store/action-creator/user';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(USerActionCreators, dispatch);
};
