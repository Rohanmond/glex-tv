import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MockAPI } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path='/mock-man' element={<MockAPI />} />
      </Routes>
    </>
  );
}

export default App;
