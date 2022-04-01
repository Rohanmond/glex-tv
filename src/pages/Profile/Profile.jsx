import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';
import './Profile.css';
export const Profile = () => {
  const { logoutHandler, user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className='profile-wrapper'>
      <div className='profile-container'>
        <div className='profile-header'>
          <h2>Account</h2>
        </div>
        <div className='profile-details'>
          <h3 className='profile-details-header'>User Details</h3>
          <p className='profile-details-item'>
            <span className='profile-details-label'>Name: </span>
            <span>{user.name}</span>
          </p>
          <p className='profile-details-item'>
            <span className='profile-details-label'>Email: </span>
            <span>{user.email}</span>
          </p>
        </div>
        <div className='profile-footer'>
          <button
            onClick={() => {
              logoutHandler();
              navigate('/videos');
            }}
            className='profile-footer-button btn btn-primary background-danger brd-rd-semi-sq'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
