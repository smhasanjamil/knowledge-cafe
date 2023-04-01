import React from 'react';
import './App.css';
import Main from './component/Main/Main';
import Navbar from './component/Navbar/Navbar';
import Forum from './component/Forum/Forum';

const App = () => {
  return (
    <div className='m-10'>
      <Navbar />
      <Main></Main>
      <Forum></Forum>
    </div>
  );
};

export default App;