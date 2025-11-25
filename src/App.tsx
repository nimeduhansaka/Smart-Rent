import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import CategoryDetail from './pages/CategoryDetail';
import SearchResults from './pages/SearchResults';
import ListItem from './pages/ListItem';
import HowItWorks from './pages/HowItWorks';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Preloader from './components/Preloader';
import ContactUs from './pages/ContactUs';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import BuyMeCoffeeWidget from "./components/BuyMeCoffeeWidget";

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        
        <Preloader visible={loading} />
        <div className="bg-black min-h-screen">
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Routes>
                <Route path="/" element={<Home searchQuery={searchQuery} />} />
                <Route path="/browse" element={<Browse searchQuery={searchQuery} />} />
                <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
                <Route path="/category/:categoryId" element={<CategoryDetail searchQuery={searchQuery} />} />
                <Route path="/list-item" element={<ListItem />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>
            <BuyMeCoffeeWidget />
            <Footer />
        </div>

        </>
    );
}

export default App;
