import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PopView from './views/PopViews'
import AdminView from './views/Admin'
import FormModify from './views/FormModify'
import FormAdd from './views/FormAdd'
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/pops' element={<PopView/>} />
        <Route path='/admin' element={<AdminView/>} />
        <Route path='/formModify' element={<FormModify/>} />
        <Route path='/formAdd' element={<FormAdd/>} />
      </Routes>
    </BrowserRouter>
   
   </>
    );
}

export default App;
