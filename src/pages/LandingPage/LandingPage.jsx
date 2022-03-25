import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className='hero-video-thumbnail-container'>
      <div className='home-hero-img-container'>
        <img
          className='img-responsive home-hero-image'
          src='https://res.cloudinary.com/donqbxlnc/image/upload/v1647995519/MLP._SX1440_CR575_0_865_675_QL80_AC_FP__sxv0wl.jpg'
          alt='sample-'
        />
        <div className='home-hero-img-overlay'></div>
        <div className='home-hero-image-text'>
          <h1 className='text-align-center'>Glex TV+ Originals</h1>
          <p className='home-hero-subheading text-align-center'>
            Exclusively on Glex TV+. Watch here and on the Glex TV app across
            your devices.
          </p>
          <button
            className='btn btn-primary background-secondary brd-rd-semi-sq'
            onClick={() => navigate('/home/videos')}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};
