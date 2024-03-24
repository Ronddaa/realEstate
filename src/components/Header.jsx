import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header" id="header">
      <Link to='/' className="mainPageLogo"><img src="./src/assets/logo.svg" alt="logo" className="mainPageLogoIMG" width="157" height="46"/></Link>
      <nav>
        <ul className="headerWrapperNav">
          <li>
            <Link to='/team' className="headerNavLinks">TEAM</Link>
          </li>
          <li>
            <Link to='/membership' className="headerNavLinks">membership</Link>
          </li>
          <li>
            <Link to='/properties' className="headerNavLinks">PROPERTIES</Link>
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
    </header>
    )
}