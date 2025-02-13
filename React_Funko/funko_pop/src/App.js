import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PopView from './views/PopViews'
import AdminView from './views/Admin'
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/pops' element={<PopView/>} />
        <Route path='/admin' element={<AdminView/>} />
      </Routes>
    </BrowserRouter>
   
   </>
    );
}

export default App;
