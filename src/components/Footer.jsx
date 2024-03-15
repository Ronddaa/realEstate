import sprite from '../assets/icons.svg';
import './Footer.css'

export default function Footer() {
    
    return (
        <>
            <footer className="footer">
                    <nav className="footerNavigation">
                        <ul className="wrapperFooterNav">
                            <li className="footerNavLinks">
                                <a href="#" className="footerNavLink">team</a>
                            </li>
                            <li className="footerNavLinks">
                                <a href="#" className="footerNavLink">membership</a>
                            </li>
                            <li className="footerNavLinks">
                                <a href="#" className="footerNavLink">sale</a>
                            </li>
                            <li className="footerNavLinks">
                                <a href="#" className="footerNavLink">rent</a>
                            </li>
                            <li className="footerNavLinks">
                                <a href="#" className="footerNavLink">agents</a>
                            </li>
                            <li className="footerNavLinks">
                                <a href="#" className="footerNavLink">blog</a>
                            </li>
                            <li className="footerNavLinks">
                                <a href="#" className="footerNavLink">events</a>
                            </li>
                            <li className="footerNavLinks">
                                <a href="#" className="footerNavLink">area guides</a>
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
            <div className="policyFooter">
                <p className="textPolicyFooter">GBN & partners All rights reserved</p>
                <p className="textPolicyFooter">privacy policy</p>
            </div>
        </>
    )
}