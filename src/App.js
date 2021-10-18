import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header.component';
import Places from './components/places.component';
import Footer from './components/footer.component';

function App() {
  return (
    <div>
      {/* header */}
      <Header/>
      {/* body */}
      <Places/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
