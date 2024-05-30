import { Link } from "react-router-dom";
import mainPageLogoIMG from '../assets/logo.svg';
import sprite from '../assets/icons.svg';
import { BurgerMenuSlide } from './Modals';
import { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [modalPrizeIsOpen, setModalPrizeOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
    const transparent = currentScrollPos > 100; // Adjust this value based on when you want the header to become transparent
    setVisible(visible);
    setTransparent(transparent);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header className={`header ${visible ? 'visible' : 'hidden'} ${transparent ? 'transparent' : ''}`} id="header">
        <Link to='/' className="mainPageLogo">
          <img src={mainPageLogoIMG} alt="logo" className="mainPageLogoIMG" width="157" height="46"/>
        </Link>
        <nav>
          <ul className="headerWrapperNav">
            <li>
              <Link to='/team' className="headerNavLinks">TEAM</Link>
            </li>
            <li className="dropdownMenuProperties">
              <Link to='/properties' className="headerNavLinks">PROPERTIES</Link>
            </li>
            <li>
              <Link to='/blog' className="headerNavLinks">BLOG</Link>
            </li>
            <li>
              <Link to='/events' className="headerNavLinks">EVENTS</Link>
            </li>
          </ul>
        </nav>
        <button className="headerBookingBtn" id="headerBookingBtn">
          Submit an Inquiry
        </button>
        <svg className="headerBurgerMenuBtn" width={80} height={50} onClick={() => setModalPrizeOpen(true)}>
          <use xlinkHref={`${sprite}#icon-burger-menu`}></use>
        </svg>
      </header>
      <main className="main-content">
        {/* Your main content here */}
      </main>
      <BurgerMenuSlide
        isOpen={modalPrizeIsOpen}
        onClose={() => setModalPrizeOpen(false)}
      >
        <div className="wrapperHeaderBurgerMenu">
          <h2 className="titleBurgerMenu">GBN & <br />INVEST</h2>
        </div>
        <ul className="wrapperNavigationBurgerMenu">
          <li className="burgerMenuPageLinks">
            <Link to='/team' className="BurgerMenuLinks">team</Link>
          </li>
          <li className="burgerMenuPageLinks">
            <Link to='/properties' className="BurgerMenuLinks">properties</Link>
          </li>
          <li className="burgerMenuPageLinks">
            <Link to='/blog' className="BurgerMenuLinks">blog</Link>
          </li>
          <li className="burgerMenuPageLinks">
            <Link to='/events' className="BurgerMenuLinks">events</Link>
          </li>
          <li className="burgerMenuPageLinks">
            <Link to='/areaguide' className="BurgerMenuLinks">Global Property Overview</Link>
          </li>
          <li className="burgerMenuPageLinks">
            <Link to='/policy' className="BurgerMenuLinks">policy privacy</Link>
          </li>
        </ul>
        <div className="wrapperBookV">
          <button className="burgerMenuBookingBtn mainContactBtn">Join Us</button>
          <article>
            <h3 className="titleBurgerMenuFooter">London</h3>
            <ul className="wrapperBurgerInfoContacts">
              <li className="burgerInfoContacts">
                <a href="tel:+02037657788" className="burgerLinkToCall">+ 020 - 3765 - 7788</a>
              </li>
              <li className="burgerInfoContacts">Regent 334 St.</li>
              <li className="burgerInfoContacts">10:00 - 18:00</li>
            </ul>
          </article>
        </div>
      </BurgerMenuSlide>
    </>
  )
}