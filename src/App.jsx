import React from 'react';
import './App.css';
import Main from './component/Main/Main';
import Navbar from './component/Navbar/Navbar';
import Forum from './component/Forum/Forum';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='m-10'>
      <Navbar />
      <Main></Main>
      <Forum></Forum>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;