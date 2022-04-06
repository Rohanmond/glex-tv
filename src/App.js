import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, MockAPI, Nav, PrivateRoute } from './components';
import { useAuth, useData, useTheme } from './contexts';
import {
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

function App() {
  const { playlistModalState } = useData();
  const { token } = useAuth();
  const { theme } = useTheme();

  return (
    <div className='app' data-theme={theme}>
      {token && playlistModalState && (
        <PlayListModal video={playlistModalState} />
      )}
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} exact />
        <Route path='/mock-man' element={<MockAPI />} />

        <Route path='' element={<Home />}>
          <Route path='videos' element={<VideoList />} />
          <Route
            path='video/:videoId'
            element={
              <PrivateRoute>
                <VideoDetails />
              </PrivateRoute>
            }
          />
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
      </Routes>
    </div>
  );
}

export default App;
