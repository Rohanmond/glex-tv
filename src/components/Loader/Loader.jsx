import { Rings } from 'react-loader-spinner';
import './Loader.css';
export const Loader = () => {
  return (
    <div className='loader'>
      <Rings color={'var(--black-color)'} ariaLabel='loading-indicator' />
    </div>
  );
};
