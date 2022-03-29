import './PlayListModal.css';
import { useData } from '../../../../contexts';
import { useState } from 'react';

export const PlayListModal = () => {
  const { setShowPlaylistModal } = useData();
  const [showCreate, setShowCreate] = useState(false);

  const createSubmitHandler = (e) => {
    e.preventDefault();
    setShowCreate(false);
  };
  return (
    <>
      {
        <div className='modal-wrapper'>
          <div className='playlist-modal' onClick={(e) => e.stopPropagation()}>
            <div className='playlist-header'>
              <p>Save to...</p>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPlaylistModal(false);
                }}
                className='material-icons-outlined playlist-close-btn'
              >
                close
              </span>
            </div>
            <div className='playlist-lists'>
              <div className='playlist' onClick={() => console.log('checl')}>
                <input id='watch-later' type='checkbox' />
                <label htmlFor='watch-later'>Watch Later</label>
              </div>
            </div>
            {showCreate ? (
              <div className='playlist-create-section'>
                <form
                  className='playlist-create-input-container'
                  onSubmit={createSubmitHandler}
                >
                  <p>Enter title to create playlist</p>
                  <input
                    className=' playlist-create-text-input'
                    type='text'
                    placeholder='playlist title'
                    required
                  />
                  <input
                    className='btn btn-sm btn-primary background-primary'
                    type='submit'
                    value={'Create'}
                  />
                </form>
              </div>
            ) : (
              <div
                className='playlist-create-section'
                onClick={() => setShowCreate(true)}
              >
                <span className='material-icons-outlined'>add</span>
                <p>Create new playlist</p>
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
};
