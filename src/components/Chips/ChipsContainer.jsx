import { useRef, useState } from 'react';
import { useData } from '../../contexts';
import './ChipsContainer.css';
import Chip from './components/Chip';

export const ChipsContainer = () => {
  const { state } = useData();
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  return (
    <>
      <div className='chips-outer-container'>
        {scrollX !== 0 && (
          <button className='prev-btn' onClick={() => slide(-50)}>
            <span className='material-icons-outlined'>navigate_before</span>
          </button>
        )}
        <div className='chips-container' ref={scrl} onScroll={scrollCheck}>
          <Chip element={{ categoryName: 'all' }} />
          <Chip element={{ categoryName: 'sort by latest' }} />
          {state.categories.map((el) => {
            return <Chip element={el} key={el._id} />;
          })}
        </div>
        {!scrolEnd && (
          <button className='next-btn' onClick={() => slide(50)}>
            <span className='material-icons-outlined'>navigate_next</span>
          </button>
        )}
      </div>
    </>
  );
};
