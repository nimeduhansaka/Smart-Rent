import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import Footer from './components/Footer';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <div className="bg-black">

            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Hero />
            <CategoryGrid searchQuery={searchQuery} />
            <Footer />

            </div>

        </>
    );
}

export default App;
