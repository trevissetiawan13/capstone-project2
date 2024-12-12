import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-8">
                 <NavLink to="/" className="text-2xl font-bold hover:text-gray-300">World Wide News</NavLink>
                <div className="flex space-x-4">
                    <NavLink to="/" className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'text-blue-500' : ''}`}>Indonesia</NavLink>
                    <NavLink to="/programming" className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'text-blue-500' : ''}`}>Programming</NavLink>
                    <NavLink to="/covid-19" className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'text-blue-500' : ''}`}>Covid-19</NavLink>
                    <NavLink to="/saved" className={({ isActive }) => `hover:text-gray-300 ${isActive ? 'text-blue-500' : ''}`}>Saved</NavLink>
                </div>
            </div>
            <SearchBar />
        </nav>
    );
};

export default Navbar;