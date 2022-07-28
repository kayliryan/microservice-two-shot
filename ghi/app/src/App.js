import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatList from './HatList';
import HatForm from './HatForm';

function App(props) {
  if (props.hats === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hats" element={<HatList hats={props.hats} />} />
          <Route path="/hats/create" element={<HatForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
