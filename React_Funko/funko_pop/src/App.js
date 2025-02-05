import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PopView from './views/PopViews'
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/pops' element={<PopView/>} />
      </Routes>
    </BrowserRouter>
   
   </>
    );
}

export default App;
