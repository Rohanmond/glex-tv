import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import { Home, MockAPI, Nav } from './components';
import { useData } from './contexts';
import { LandingPage, VideoList } from './pages';

function App() {
  const { state } = useData();
  useEffect(() => {
    console.log(state);
  }, [state]);
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
