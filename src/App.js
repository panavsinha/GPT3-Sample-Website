import React from 'react'
import { Article, Cta, Brand, Navbar } from './components';
import { Blog, Footer, Features, Header, Possibility, Whatgpt3 } from './containers';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <Article />
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whatgpt3 />
            <Features />
            <Possibility />
            <Cta />
            <Footer />
        </div>
    )
}

export default App