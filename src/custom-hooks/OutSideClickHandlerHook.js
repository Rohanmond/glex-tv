import { useEffect } from 'react';
import { ACTION_TYPE } from '../constants/constant';
import { useData } from '../contexts';

export const useOutsideClickHandler = (ref) => {
  const { dispatch } = useData();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch({
          type: ACTION_TYPE.RESET_MENU,
        });
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.addEventListener('click', handleClickOutside, true);
    };
  }, [ref]);
};
