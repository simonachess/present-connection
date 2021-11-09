import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import RecordDetails from './pages/RecordDetails';
import NewRecord from './pages/NewRecord';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/record-details/:id' element={<RecordDetails />} />
        <Route path='/new-record' element={<NewRecord />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
