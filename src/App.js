import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, MockAPI, Nav, PrivateRoute } from './components';
import {
  HistoryPage,
  LandingPage,
  LikedPage,
  Login,
  PlayList,
  Signup,
  VideoDetails,
  VideoList,
  WatchLater,
} from './pages';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mock-man' element={<MockAPI />} />
        <Route path='' element={<Home />}>
          <Route path='videos' element={<VideoList />} />
          <Route path='video/:videoId' element={<VideoDetails />} />
          <Route path='watch_later' element={<WatchLater />} />
          <Route path='liked_page' element={<LikedPage />} />
          <Route
            path='history_page'
            element={
              <PrivateRoute>
                <HistoryPage />
              </PrivateRoute>
            }
          />
          <Route
            path='playlist_page'
            element={
              <PrivateRoute>
                <PlayList />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
