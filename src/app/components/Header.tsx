'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const lastScrollTop = useRef(0); // useRef para preservar o valor de lastScrollTop

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    if (currentScrollTop > lastScrollTop.current) {
      setIsVisible(false); // Scroll Down
    } else {
      setIsVisible(true); // Scroll Up
    }
    lastScrollTop.current = currentScrollTop; // Atualiza lastScrollTop
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Mantém o array de dependências vazio, já que handleScroll é definido dentro do useEffect

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.headerContent}>
        <button
          className={`${styles.iconButton} ${isButtonClicked ? styles.iconButtonClicked : ''}`}
          onClick={handleClick}
        >
          <Image src="/images/icon.svg" alt="Icon" width={30} height={30} />
        </button>
        <div className={styles.logoContainer}>
          <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
        </div>
      </div>
    </header>
  );
};

export default Header;
