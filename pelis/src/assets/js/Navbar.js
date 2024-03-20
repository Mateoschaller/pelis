import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 50); 
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
            <div className={`navbar ${isSticky ? 'fixed' : ''}`}>
                <div className="navbar-brand">
                    <h1>Busca tu peli</h1>
                </div>
                <div className="navbar-links-container">
                    <Link to="/EncuestaPeli">Pelicula aleatoria</Link>
                    <Link to="/">Inicio</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;