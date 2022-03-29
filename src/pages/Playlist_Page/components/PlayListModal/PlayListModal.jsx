import './PlayListModal.css';
import { useData } from '../../../../contexts';
import { useState } from 'react';

export const PlayListModal = ({ video }) => {
  const { setShowPlaylistModal, PostPlaylist, state } = useData();
  const [input, setInput] = useState('');
  const [showCreate, setShowCreate] = useState(false);

  const createSubmitHandler = (e) => {
    e.preventDefault();
    setShowCreate(false);
    console.log(video);
    console.log(input);
    setInput('');
    PostPlaylist({ title: input });
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
              <div className='playlist'>
                <input id='watch-later' type='checkbox' />
                <label htmlFor='watch-later'>Watch Later</label>
              </div>
              {state.playlists.length > 0 &&
                state.playlists.map((list) => {
                  return (
                    <div key={list._id} className='playlist'>
                      <input id={list.title} type='checkbox' />
                      <label htmlFor={list.title}>{list.title}</label>
                    </div>
                  );
                })}
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
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
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
