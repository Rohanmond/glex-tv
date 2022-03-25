import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import { MockAPI, Nav } from './components';
import { useData } from './contexts';

function App() {
  const { state } = useData();
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/mock-man' element={<MockAPI />} />
      </Routes>
    </>
  );
}

export default App;
