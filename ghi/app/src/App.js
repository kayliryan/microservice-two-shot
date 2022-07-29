import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoeList from './shoelist';
import HatList from './HatList';
import HatForm from './HatForm';
import ShoeForm from './ShoeForm';


function App(props) {
    // if (props.hats === undefined) {
    //   return null;
    // }
    if(props.shoes === undefined){
      return null;
    }
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shoes" element={<ShoeList />} />
          <Route path="/shoes/new" element={<ShoeForm />}/>
          <Route path="/hats" element={<HatList hats={props.hats} />} />
          <Route path="/hats/create" element={<HatForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
