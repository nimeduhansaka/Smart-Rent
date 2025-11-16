import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import CategoryDetail from './pages/CategoryDetail';
import ListItem from './pages/ListItem';
import HowItWorks from './pages/HowItWorks';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Preloader from './components/Preloader';
import { useRouteLoading } from './hooks/useRouteLoading';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const loading = useRouteLoading(600);

    return (
        <div className="bg-black min-h-screen">
            <Preloader visible={loading} />
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Routes>
                <Route path="/" element={<Home searchQuery={searchQuery} />} />
                <Route path="/browse" element={<Browse searchQuery={searchQuery} />} />
                <Route path="/category/:categoryId" element={<CategoryDetail />} />
                <Route path="/list-item" element={<ListItem />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
