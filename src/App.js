import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, MockAPI, Nav } from './components';
import { LandingPage, VideoList } from './pages';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mock-man' element={<MockAPI />} />
        <Route path='/home' element={<Home />}>
          <Route path='videos' element={<VideoList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
