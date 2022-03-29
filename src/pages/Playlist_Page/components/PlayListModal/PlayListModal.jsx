import './PlayListModal.css';
import { useState } from 'react';

export const PlayListModal = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className='modal-wrapper'>
          <div className='playlist-modal'>
            <div className='playlist-header'>
              <p>Save to...</p>
              <span
                onClick={() => setShow(false)}
                class='material-icons-outlined playlist-close-btn'
              >
                close
              </span>
            </div>
            <div className='playlist-lists'>
              <div className='playlist'>
                <input id='watch-later' type='checkbox' />
                <label htmlFor='watch-later'>Watch Later</label>
              </div>
            </div>
            <div className='playlist-create-section'>
              <span class='material-icons-outlined'>add</span>
              <p>Create new playlist</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
