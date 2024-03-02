// App.js

import React from 'react';
import Navbar from './component/navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Footer from './component/Footer/Footer';



function App() {
  return (
    <div>
       <Navbar/>
       <Home/>
       <About/>
       <Footer/>
    </div>
  );
}

export default App;
