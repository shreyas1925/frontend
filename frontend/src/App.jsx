import React from 'react';
import { RegisterPage,LoginPage,Dashboard, DashboardDetails } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

const App = () => {

    return (
        <div data-testid='app'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RegisterPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/dashboard/:id" element={<DashboardDetails/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
    
            </BrowserRouter>
     

        </div>
    );
};

export default App;