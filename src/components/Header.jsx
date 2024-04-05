import { Link } from "react-router-dom"
import mainPageLogoIMG from '../assets/logo.svg'
import sprite from '../assets/icons.svg'

export default function Header() {
    return (
        <header className="header" id="header">
      <Link to='/' className="mainPageLogo"><img src={mainPageLogoIMG} alt="logo" className="mainPageLogoIMG" width="157" height="46"/></Link>
      <nav>
        <ul className="headerWrapperNav">
          <li>
            <Link to='/team' className="headerNavLinks">TEAM</Link>
          </li>
          <li>
            <Link to='/membership' className="headerNavLinks">membership</Link>
          </li>
          <li className="dropdownMenuProperties">
              <p className="headerNavLinks headerNavLinksProperties">Properties</p>
              <div className="wrapperDropDownMenuProperties">
                <ul className="dropDown-Wrapper">
                  <li>
                    <Link to='/' className="headerNavLinks">Sale</Link>
                  </li>
                  <li>
                    <Link to='/' className="headerNavLinks">Rent</Link>
                  </li>
                </ul>
            </div>
          </li>
          <li>
            <Link to='/agents' className="headerNavLinks">AGENTS</Link>
          </li>
          <li>
            <Link to='/blog' className="headerNavLinks">BLOG</Link>
          </li>
          <li>
            <Link to='/events' className="headerNavLinks">EVENTS</Link>
          </li>
          <li>
            <Link to='/areaguides' className="headerNavLinks">AREA GUIDES</Link>
          </li>
        </ul>
      </nav>
      <button className="headerBookingBtn" id="headerBookingBtn">
        BOOK VALUATION
        </button>
        <svg className="headerBurgerMenuBtn" width={80} height={50}>
          <use xlinkHref={`${sprite}#icon-burger-menu`}></use>
        </svg>
    </header>
    )
}