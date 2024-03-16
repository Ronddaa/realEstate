

export default function Header() {
    return (
        <header className="header" id="header">
      <a href="#" className="mainPageLogo"><img src="./src/assets/logo.svg" alt="logo" className="mainPageLogoIMG" width="157" height="46"/></a>
      <nav>
        <ul className="headerWrapperNav">
          <li>
            <a href="#" className="headerNavLinks">TEAM</a>
          </li>
          <li>
            <a href="#" className="headerNavLinks">membership</a>
          </li>
          <li>
            <a href="#" className="headerNavLinks">PROPERTIES</a>
          </li>
          <li>
            <a href="#" className="headerNavLinks">AGENTS</a>
          </li>
          <li>
            <a href="#" className="headerNavLinks">BLOG</a>
          </li>
          <li>
            <a href="#" className="headerNavLinks">EVENTS</a>
          </li>
          <li>
            <a href="#" className="headerNavLinks">AREA GUIDES</a>
          </li>
        </ul>
      </nav>
      <button className="headerBookingBtn" id="headerBookingBtn">
        BOOK VALUATION
      </button>
    </header>
    )
}