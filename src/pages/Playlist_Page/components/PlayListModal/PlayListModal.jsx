import './PlayListModal.css';
import { useData } from '../../../../contexts';
import { useState, useRef, useEffect } from 'react';
import { ACTION_TYPE } from '../../../../constants/constant';
import { useOutsideClickHandler } from '../../../../custom-hooks/OutSideClickHandlerHook';

export const PlayListModal = ({ video }) => {
  const {
    setPlaylistModalState,
    postPlaylist,
    state,
    dispatch,
    postSingleVideoPlaylist,
    deleteSingleVideoFromPlaylist,
    postWatchLater,
    deleteVideoFromWatchLater,
  } = useData();
  const [input, setInput] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [samePlaylistError, setSamePlaylistError] = useState(false);
  const ref = useRef(null);
  const { resetMenu } = useOutsideClickHandler(ref);

  useEffect(() => {
    if (resetMenu) setPlaylistModalState(null);
  }, [resetMenu]);
  const createSubmitHandler = (e) => {
    e.preventDefault();
    let errorFlag = false;
    state.playlists.forEach((list) => {
      if (list.title === input) {
        setSamePlaylistError(true);
        errorFlag = true;
        return;
      }
    });

    if (!errorFlag) {
      console.log('post playlist');
      postPlaylist({ title: input });
      setShowCreate(false);
      setInput('');
    }
  };
  const checkboxChangeHandler = (e, list) => {
    if (!e.target.checked) {
      deleteSingleVideoFromPlaylist({
        playlistId: list._id,
        videoId: video._id,
      });
    } else {
      postSingleVideoPlaylist({ playlistId: list._id, video });
    }
  };
  const watchLaterCheckboxHandler = (e) => {
    if (!e.target.checked) {
      deleteVideoFromWatchLater({ videoId: video._id });
    } else {
      postWatchLater({ video });
    }
  };
  return (
    <>
      {
        <div className='modal-wrapper'>
          <div ref={ref} className='playlist-modal'>
            <div className='playlist-header'>
              <p>Save to...</p>
              <span
                onClick={(e) => {
                  setPlaylistModalState(null);
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
                  <input
                    type={'checkbox'}
                    checked={state.laters.some(
                      (item) => item._id === video._id
                    )}
                    onChange={(e) => {
                      watchLaterCheckboxHandler(e);
                    }}
                  />
                  Watch Later
                </label>
              </div>
              {state.playlists.length > 0 &&
                state.playlists.map((list) => {
                  return (
                    <div key={list._id} className='playlist'>
                      <label
                        htmlFor={list._id}
                        className='playlist-checkbox-container'
                      >
                        <input
                          id={list._id}
                          type={'checkbox'}
                          checked={list.videos.some(
                            (item) => item._id === video._id
                          )}
                          onChange={(e) => {
                            checkboxChangeHandler(e, list);
                          }}
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
                  onSubmit={(e) => {
                    createSubmitHandler(e);
                  }}
                >
                  <p>Enter title to create playlist</p>
                  <input
                    className=' playlist-create-text-input'
                    type='text'
                    value={input}
                    onFocus={() => setSamePlaylistError(false)}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='playlist title'
                    required
                  />
                  <input
                    className='btn btn-sm btn-primary background-primary'
                    type='submit'
                    value={'Create'}
                  />
                  {samePlaylistError && (
                    <div className='err-msg'>Already having same playlist</div>
                  )}
                </form>
              </div>
            ) : (
              <div
                className='playlist-create-section'
                onClick={() => setShowCreate(true)}
              >
                <div className='playlist-create-button-section'>
                  <span className='material-icons-outlined'>add</span>
                  <p>Create new playlist</p>
                </div>
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
};
