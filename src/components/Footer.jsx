import sprite from '../assets/icons.svg';
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    
    return (
        <>
            <footer className="footerDesc">
                    <nav className="footerNavigation">
                        <ul className="wrapperFooterNav">
                            <li className="footerNavLinks">
                                <Link to='/team' className="footerNavLink">team</Link>
                            </li>
                            
                            <li className="footerNavLinks">
                                <Link to='/sale' className="footerNavLink">sale</Link>
                            </li>
                            <li className="footerNavLinks">
                                <Link to='/rent' className="footerNavLink">rent</Link>
                            </li>
                            <li className="footerNavLinks">
                                <Link to='/agents' className="footerNavLink">agents</Link>
                            </li>
                            <li className="footerNavLinks">
                                <Link to='/blog' className="footerNavLink">blog</Link>
                            </li>
                            <li className="footerNavLinks">
                                <Link to='/events' className="footerNavLink">events</Link>
                            </li>
                            <li className="footerNavLinks">
                                <Link to='/areaguides' className="footerNavLink">area guides</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="wrapperFormContacts">
                        <form className="footerForm" action="">
                            <label htmlFor="inputForUserName" className="labelInput">
                                <input type="text" className="inputUserDate" id="inputForUserName" required />
                                <span className="textInInput">first name</span>
                            </label>
                            <label htmlFor="inputForUserSName" className="labelInput">
                                <input type="text" className="inputUserDate" id="inputForUserSName" required />
                                <span className="textInInput">last name</span>
                            </label>
                            <label htmlFor="inputForUserEmail" className="labelInput">
                                <input type="email" className="inputUserDate" id="inputForUserEmail" required />
                                <span className="textInInput">e-mail</span>
                            </label>
                            <label htmlFor="inputForUserPhone" className="labelInput">
                                <input type="phone" className="inputUserDate" id="inputForUserPhone" required />
                                <span className="textInInput">phone number</span>
                            </label>
                            <label htmlFor="inputForUserCity" className="labelInput">
                                <input type="text" className="inputUserDate" id="inputForUserCity" required />
                                <span className="textInInput">your town / city</span>
                            </label>
                            <label htmlFor="inputForUserPostCode" className="labelInput">
                                <input type="text" className="inputUserDate" id="inputForUserPostCode" required />
                                <span className="textInInput">postcode</span>
                            </label>
                            <button className="formFooterBtn" id="formFooterBtn">book valuation</button>
                        </form>
                        <article className="wrapperOurLocation">
                            <h3 className="titleFooterLondon">London</h3>
                            <a href="tel:+02037657788" className="linkToCallUsFooter">+ 020 - 3765 - 7788</a>
                            <p className="textOurLocation">Regent 334 St.</p>
                            <p className="textOurLocation">10:00 - 18:00</p>
                            <div className="wrapperSocialLinksFooter">
                                <a href="#" className="linkToSocialFooter" target='_blank' rel='noreferrer'>
                                    <svg className='iconToSocialFooter' width={25} height={25}><use xlinkHref={`${sprite}#icon-instagram`} /></svg>
                                </a>
                                <a href="#" className="linkToSocialFooter" target='_blank' rel='noreferrer'>
                                    <svg className='iconToSocialFooter' width={25} height={25}><use xlinkHref={`${sprite}#icon-linkedin`} /></svg>
                                </a>
                                <a href="#" className="linkToSocialFooter" target='_blank' rel='noreferrer'>
                                    <svg className='iconToSocialFooter' width={25} height={25}><use xlinkHref={`${sprite}#icon-facebook`} /></svg>
                                </a>
                            </div>
                        </article>
                    </div>
            </footer>
            <footer className='footerMobile'>
                <article className='wrapperFooterContact'>
                    <h2 className="titleFooter">GBN <br /> & partners</h2>
                    <div className="wrapperFooterContacts">
                        <h3 className="titleFooterContacts">London</h3>
                        <div>
                            <a href="tel:+02037657788" className="footerLinkToCall">+ 020 - 3765 - 7788</a>
                            <p className="textFooterContacts">Regent 334 St.</p>
                            <p className="textFooterContacts">10:00 - 18:00</p>
                        </div>
                    </div>
                </article>
                <nav className="footerNavMobile">
                    <ul>
                        <li className="footerNavLinks">
                            <Link to='/team' className="footerNavLink">team</Link>
                        </li>
                       
                        <li className="footerNavLinks">
                            <Link to='/sale' className="footerNavLink">sale</Link>
                        </li>
                        <li className="footerNavLinks">
                            <Link to='/rent' className="footerNavLink">rent</Link>
                        </li>
                        <li className="footerNavLinks">
                            <Link to='/agents' className="footerNavLink">agents</Link>
                        </li>
                        <li className="footerNavLinks">
                            <Link to='/blog' className="footerNavLink">blog</Link>
                        </li>
                        <li className="footerNavLinks">
                            <Link to='/events' className="footerNavLink">events</Link>
                        </li>
                        <li className="footerNavLinks">
                            <Link to='/areaguides' className="footerNavLink">area guides</Link>
                        </li>
                    </ul>
                    <div className="wrapperSocialLinksFooter">
                        <a href="#" className="linkToSocialFooter" target='_blank' rel='noreferrer'>
                            <svg className='iconToSocialFooter' width={25} height={25}><use xlinkHref={`${sprite}#icon-instagram`} /></svg>
                        </a>
                        <a href="#" className="linkToSocialFooter" target='_blank' rel='noreferrer'>
                            <svg className='iconToSocialFooter' width={25} height={25}><use xlinkHref={`${sprite}#icon-linkedin`} /></svg>
                        </a>
                        <a href="#" className="linkToSocialFooter" target='_blank' rel='noreferrer'>
                            <svg className='iconToSocialFooter' width={25} height={25}><use xlinkHref={`${sprite}#icon-facebook`} /></svg>
                        </a>
                    </div>
                </nav>
                <form className="footerForm" action="">
                    <label htmlFor="inputForUserName" className="labelInput">
                        <input type="text" className="inputUserDate" id="inputForUserName" required />
                        <span className="textInInput">first name</span>
                    </label>
                    <label htmlFor="inputForUserSName" className="labelInput">
                        <input type="text" className="inputUserDate" id="inputForUserSName" required />
                        <span className="textInInput">last name</span>
                    </label>
                    <label htmlFor="inputForUserEmail" className="labelInput">
                        <input type="email" className="inputUserDate" id="inputForUserEmail" required />
                        <span className="textInInput">e-mail</span>
                    </label>
                    <label htmlFor="inputForUserPhone" className="labelInput">
                        <input type="phone" className="inputUserDate" id="inputForUserPhone" required />
                        <span className="textInInput">phone number</span>
                    </label>
                    <label htmlFor="inputForUserCity" className="labelInput">
                        <input type="text" className="inputUserDate" id="inputForUserCity" required />
                        <span className="textInInput">your town / city</span>
                    </label>
                    <label htmlFor="inputForUserPostCode" className="labelInput">
                        <input type="text" className="inputUserDate" id="inputForUserPostCode" required />
                        <span className="textInInput">postcode</span>
                    </label>
                    <button className="formFooterBtn" id="formFooterMobileBtn">book valuation</button>
                </form>
            </footer>
            <div className="policyFooter">
                <p className="textPolicyFooter">GBN & partners All rights reserved</p>
                <p className="textPolicyFooter">privacy policy</p>
            </div>
        </>
    )
}