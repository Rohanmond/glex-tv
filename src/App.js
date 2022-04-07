import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Home, Loader, MockAPI, Nav, PrivateRoute } from './components';
import { useAuth, useData, useTheme } from './contexts';
import {
  ErrorPage,
  HistoryPage,
  LandingPage,
  LikedPage,
  Login,
  PlayList,
  PlaylistDetials,
  Profile,
  Signup,
  VideoDetails,
  VideoList,
  WatchLater,
} from './pages';
import { PlayListModal } from './pages/Playlist_Page/components/PlayListModal/PlayListModal';
import { ToastContainer } from 'react-toastify';

function App() {
  const { playlistModalState, loader } = useData();
  const { token } = useAuth();
  const { theme } = useTheme();

  return (
    <>
      <div className='app' data-theme={theme}>
        <ToastContainer
          position='bottom-right'
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          theme='colored'
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        {token && playlistModalState && (
          <PlayListModal video={playlistModalState} />
        )}
        {loader && <Loader />}
        <Nav />

        <Routes>
          <Route path='/' element={<LandingPage />} exact />
          <Route path='/mock-man' element={<MockAPI />} />

          <Route path='' element={<Home />}>
            <Route path='videos' element={<VideoList />} />
            <Route path='video/:videoId' element={<VideoDetails />} />
            <Route
              path='watchlater'
              element={
                <PrivateRoute>
                  <WatchLater />
                </PrivateRoute>
              }
            />
            <Route
              path='likes'
              element={
                <PrivateRoute>
                  <LikedPage />
                </PrivateRoute>
              }
            />
            <Route
              path='history'
              element={
                <PrivateRoute>
                  <HistoryPage />
                </PrivateRoute>
              }
            />
            <Route
              path='playlist'
              element={
                <PrivateRoute>
                  <PlayList />
                </PrivateRoute>
              }
            />
            <Route
              path='playlist/:playlistId'
              element={
                <PrivateRoute>
                  <PlaylistDetials />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='*' element={<Navigate to={'/404'} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
