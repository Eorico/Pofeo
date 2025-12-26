import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import '../styles/Nav.css';

const Nav: React.FC = () => {
    const [openMenu, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => { 
            setScrolled(window.scrollY > 50);
        };
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
          window.removeEventListener('resize', handleResize);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow ='hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openMenu]);

    const toggleMenu = () => {
        setMenuOpen(!openMenu);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navItem = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Me' },
        { path: '/project', label: 'Projects' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="navContainer">
                <Link to="/" className="navLogo" onClick={closeMenu}>
                    <img 
                        src="/assets/eoLogo.png"
                        alt="Nav logo" 
                    />
                    <span>{'<Ico_Dev/>'}</span>
                </Link>
                <div className={`navMenu ${openMenu ? 'active' : ''}`}>
                    {navItem.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`navLink ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                    ))}
                </div>

                <button className="navToggle" onClick={toggleMenu}>
                    {openMenu ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>
        </nav>
    );
};

export default Nav;