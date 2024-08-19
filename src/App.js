import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Work from './pages/work';
import PageLayout from './components/page-layout';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;