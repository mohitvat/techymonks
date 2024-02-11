import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blogs from './pages/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogPage from './pages/Blogs/BlogPage';
import Work from './pages/Work/Work';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
          <Route path="/" exact element ={<Home/>} />
          <Route path="/about" exact element ={<About/>} />
          <Route path="/contact" exact element ={<Contact/>} />
          <Route path="/blogs" exact element ={<Blogs/>} />
          <Route path="/blogpage" exact element ={<BlogPage/>} />
          <Route path="/work" exact element ={<Work/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App