import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoeList from './shoelist';

function App(props) {
  if(props.shoes === undefined){
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="shoes">
              <Route path="" element={<ShoeList shoes={props.shoes} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
