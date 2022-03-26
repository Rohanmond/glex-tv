import { useState, useEffect } from 'react';
import { ACTION_TYPE } from '../../../constants/constant';
import { useData } from '../../../contexts';
import './Chip.css';
const Chip = ({ element }) => {
  const { categoryName } = element;
  const { state, dispatch } = useData();
  const [active, setActive] = useState(false);
  useEffect(() => {
    state.filter.category === categoryName ? setActive(true) : setActive(false);
    state.filter.category === '' && categoryName === 'all' && setActive(true);
  }, [state.filter.category, categoryName]);

  return (
    <div
      className={`chip ${active && 'chip-active'}`}
      onClick={() =>
        dispatch({
          type: ACTION_TYPE.FILTER_CHANGE,
          payload: { category: categoryName },
        })
      }
    >
      <p className='font-wt-semibold'>{categoryName}</p>
    </div>
  );
};
export default Chip;
