import './PlayListModal.css';
import { useData } from '../../../../contexts';
import { useState } from 'react';
import { ACTION_TYPE } from '../../../../constants/constant';

export const PlayListModal = ({ video }) => {
  const {
    setShowPlaylistModal,
    PostPlaylist,
    state,
    dispatch,
    PostSingleVideoPlaylist,
    DeleteSingleVideoFromPlaylist,
  } = useData();
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
  const checkboxChangeHandler = (e, list) => {
    e.stopPropagation();
    console.log('check', e);
    console.log(e.target.checked);
    if (!e.target.checked) {
      DeleteSingleVideoFromPlaylist({
        playlistId: list._id,
        videoId: video._id,
      });
      console.log('delete');
    } else {
      PostSingleVideoPlaylist({ playlistId: list._id, video });
      console.log('post single video');
    }
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
                  // e.stopPropagation();
                  setShowPlaylistModal(false);
                  dispatch({
                    type: ACTION_TYPE.RESET_MENU,
                  });
                }}
                className='material-icons-outlined playlist-close-btn'
              >
                close
              </span>
            </div>
            <div className='playlist-lists'>
              <div className='playlist'>
                <label className='playlist-checkbox-container'>
                  <input type={'checkbox'} />
                  Watch Later
                </label>
              </div>
              {state.playlists.length > 0 &&
                state.playlists.map((list) => {
                  return (
                    <div key={list._id} className='playlist'>
                      <label
                        onClick={(e) => e.stopPropagation()}
                        htmlFor={list._id}
                        className='playlist-checkbox-container'
                      >
                        <input
                          id={list._id}
                          type={'checkbox'}
                          checked={list.videos.some(
                            (item) => item._id === video._id
                          )}
                          onChange={(e) => checkboxChangeHandler(e, list)}
                        />
                        {list.title}
                      </label>
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
