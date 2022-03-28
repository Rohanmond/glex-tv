import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, MockAPI, Nav } from './components';
import { LandingPage, Login, Signup, VideoDetails, VideoList } from './pages';

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
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
