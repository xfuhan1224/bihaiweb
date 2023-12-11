// App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'; // 引入新的 Home 组件
import Intro from './components/Intro';
import Ability from './components/Ability';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} /> 
                    <Route path='/about' element={<Intro />} />
                    <Route path='/ability' element={<Ability />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
