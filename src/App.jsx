import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getAmiibos from './API';
import Navbar from './Components/navBar';
import Home from './Pages/Home';
import Details from './Components/nintendoDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAmiibos());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
