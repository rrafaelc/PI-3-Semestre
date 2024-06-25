'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { clearStorage } from '../utils/clearStorage';
import { isTokenExpired } from '../utils/isTokenExpired';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      if (isTokenExpired()) {
        clearStorage();
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    } else {
      clearStorage();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest('.menu-container')
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > 700) setIsMenuOpen(false);
  }, [width]);

  const handleLogout = () => {
    clearStorage();
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return width < 700 ? (
    <header className="bg-[#001C39] text-white h-[40px] flex items-center justify-between px-5 fixed w-full z-50">
      <a href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width="33" height="33" />
        <p>Respire Bem</p>
      </a>
      <div className="relative menu-container">
        <button onClick={toggleMenu} className="flex items-center">
          <HeaderIcon />
        </button>
        {isMenuOpen && (
          <nav className="absolute right-0 mt-2 bg-white text-black p-5 rounded shadow-lg z-50">
            <a href="/" className="block mb-2">
              Página Inicial
            </a>
            <a href="/cadastrar-sensor" className="block mb-2">
              Cadastrar Sensor
            </a>
            <a href="/sensores" className="block mb-2">
              Sensores
            </a>
            <a href="/sobre" className="block mb-2">
              Sobre
            </a>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="block">
                Logout
              </button>
            ) : (
              <a href="/login" className="block">
                Login
              </a>
            )}
          </nav>
        )}
      </div>
    </header>
  ) : (
    <header className="bg-[#001C39] text-white h-[40px] flex items-center gap-5 px-2">
      <a href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width="33" height="33" />
        <p>Respire Bem</p>
      </a>
      <nav className="flex-1 flex justify-end gap-5 pr-5">
        <a href="/">Página Inicial</a>
        <a href="/cadastrar-sensor">Cadastrar Sensor</a>
        <a href="/sensores">Sensores</a>
        <a href="/sobre">Sobre</a>
        {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <a href="/login">Login</a>}
      </nav>
    </header>
  );
}
