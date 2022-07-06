import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Head from './head';
import Main from './main';
import Footer from './footer';
import Destination from './destination';
import Crew from './crew';
import Technology from './technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    document.body.classList.add('image')
    
    document.body.classList.remove('crew')

    document.body.classList.remove('technology')

    document.body.classList.remove('destination')


    document.body.classList.remove('destination')

    document.body.style.backgroundColor = 'black'
    return(
        <div className='home-image'>
            <Head />
            <div className='omo'>
                <Main />
                <Footer />
            </div>
        </div>
    )
}

const Index = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/destination' element={<Destination />}></Route>
                <Route path='/crew' element={<Crew />}></Route>
                <Route path='/technology' element={<Technology />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));