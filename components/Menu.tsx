import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@config';
// import { useOnClickOutside } from '@hooks';
// import { Helmet } from 'react-helmet-async';
// import {Helmet} from 'react-helmet'
// import '../styles/components/menu.scss';

const Menu = () => {
  const wrapperRef = useRef();
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
//   useOnClickOutside(wrapperRef, () => setMenuOpen(false))
  // const classNull : any  = null

  const onResize = (e : any) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="styledMenu">
    {/* <div ref={wrapperRef} className="styledMenu"> */}

      {/* <Helmet>
        <body className={`${menuOpen ? 'blur' : ""}`}></body>
    </Helmet> */}

      <div
        className='hamburguerButton'
        onClick={toggleMenu}
        ref={buttonRef}
        aria-label="Menu"
      >
        <div className="ham-box">
          <div className={`ham-box-inner ${menuOpen ? 'open' : ''}`} />
        </div>
      </div>

      <div
        className={`sidebar ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}
      >
        <nav ref={navRef}>
          {
            <ol>
              {navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link href={url} onClick={() => setMenuOpen(false)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ol>
          }

          <a href="/resume.pdf" className="button button--big" target='_blank' rel='noreferrer' >
            Curriculum
          </a>
        </nav>

      </div>


    </div>
  );
}

export default Menu;