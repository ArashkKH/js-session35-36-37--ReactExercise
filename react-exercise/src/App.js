import React from 'react';
import Header from './Pages/header/header'
import './global.css'
import Main1 from './Pages/main1/main'
import Main2 from './Pages/main2/main2'


function App() {
  return (
    <>
      <main className='container-fluid p-0'>
        <Header/>
        <Main1/>
        <Main2/>
      </main>
    </>
  );
}

export default App;
