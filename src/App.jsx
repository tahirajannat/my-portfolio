// import About from "./About";
// import Shop from "./Shop";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Header';
import About from './components/sections/About';
import Demo from './components/sections/Demo';
import Home from './components/views/Home';

export default function App() {
    return (
        <Router>
            <div className='App'>
                <Nav />
                <Routes>
                    <Route path='/' component={Home} />
                    {/* <Route path="/shop" component={Shop} /> */}
                </Routes>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about-me' element={<About />} />
                    {/* <Route path="*" element={<Error/>} /> */}
                </Routes>
                <Footer />
            </div>
            <Demo />
        </Router>
    );
}
