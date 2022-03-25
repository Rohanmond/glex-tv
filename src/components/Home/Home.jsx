import { Outlet } from 'react-router-dom';
import { Aside } from '../Aside/Aside';
import './Home.css';
export const Home = () => {
  return (
    <div className='outer-container'>
      <div className='aside-container'>
        <Aside />
      </div>
      <div className='main-container'>
        <Outlet />
      </div>
    </div>
  );
};
