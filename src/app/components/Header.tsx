'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { clearStorage } from '../utils/clearStorage';
import { isTokenExpired } from '../utils/isTokenExpired';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleLogout = () => {
    clearStorage();
    setIsLoggedIn(false);

    window.location.href = '/';
  };

  return (
    <header className="bg-[#001C39] text-white h-[40px] flex items-center gap-5">
      <HeaderIcon />
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width="33" height="33" />
        <p>Respire Bem</p>
      </Link>
      <nav className="flex-1 flex justify-end gap-5 pr-5">
        <Link href="/">Página Inicial</Link>
        <Link href="/sobre">Sobre</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
