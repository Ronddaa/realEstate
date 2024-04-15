import Header from "./Header";
import './Membership.css';
import membershipHeroIMG from '../assets/membershipHero.webp'
import FAQsIMG from '../assets/FAQsIMG.webp'
import GBNSectionIMG from '../assets/GBNSection.webp'
import sprite from '../assets/icons.svg'
import Footer from "./Footer";
import PropertiesSlider from "./Properties";
import { useEffect } from 'react'


export default function Membership() {
    useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
        <>
            <Header />
            <section className="MembershipHero">
                <div className="container">
                    <h1 className="titleMembership"><span>Join</span>Us</h1>
                    <div className='wrapperMainBtn wrapperMainBtnTeam'>
                        <button className='mainContactBtn mainContactBtnTeam'>Join us</button>
                        <button className='mainContactBtn mainContactBtnTeam'>Contact agent</button>
                    </div>
                </div>
                <img className="membershipHeroIMG" src={membershipHeroIMG} alt="Building" />
            </section>
            <section className="wannaPartTeamSection">
                <div className="container">
                    <h2 className="titleWannaPartTeam">do you want to be <span>part</span> of our <span>team</span>?</h2>
                    <p className="textUnderTitleWannaPartTeam">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.</p>
                    <ul className="wrapperOurPlusWanna">
                        <li className="ourPlusWanna">
                            <h3 className="titleOurPlusNumbersWanna">01</h3>
                            <div className="gfdgwrvdsvbetrwsxcvWanna">
                                <h4 className="titleAboutUsTeamWanna">Professionalism</h4>
                                <p>our team consists of experienced professionals ready to provide you with the highest level of expertise.</p>
                            </div>
                        </li>
                        <li className="ourPlusWanna">
                            <h3 className="titleOurPlusNumbersWanna">02</h3>
                            <div className="gfdgwrvdsvbetrwsxcvWanna">
                                <h4 className="titleAboutUsTeamWanna">Professionalism</h4>
                                <p>our team consists of experienced professionals ready to provide you with the highest level of expertise.</p>
                            </div>
                        </li>
                        <li className="ourPlusWanna">
                            <h3 className="titleOurPlusNumbersWanna">03</h3>
                            <div className="gfdgwrvdsvbetrwsxcvWanna">
                                <h4 className="titleAboutUsTeamWanna">Professionalism</h4>
                                <p>our team consists of experienced professionals ready to provide you with the highest level of expertise.</p>
                            </div>
                        </li>
                        <li className="ourPlusWanna">
                            <h3 className="titleOurPlusNumbersWanna">04</h3>
                            <div className="gfdgwrvdsvbetrwsxcvWanna">
                                <h4 className="titleAboutUsTeamWanna">Professionalism</h4>
                                <p>our team consists of experienced professionals ready to provide you with the highest level of expertise.</p>
                            </div>
                        </li>
                        <li className="ourPlusWanna">
                            <h3 className="titleOurPlusNumbersWanna">05</h3>
                            <div className="gfdgwrvdsvbetrwsxcvWanna">
                                <h4 className="titleAboutUsTeamWanna">Professionalism</h4>
                                <p>our team consists of experienced professionals ready to provide you with the highest level of expertise.</p>
                            </div>
                        </li>
                        <li className="ourPlusWanna">
                            <h3 className="titleOurPlusNumbersWanna">06</h3>
                            <div className="gfdgwrvdsvbetrwsxcvWanna">
                                <h4 className="titleAboutUsTeamWanna">Professionalism</h4>
                                <p>our team consists of experienced professionals ready to provide you with the highest level of expertise.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="justWeSection">
                <h2 className="titleGBNaPartners">GBN & Partners</h2>
                <img className="GBNSEctionIMG" src={GBNSectionIMG} alt="we" width={436} height={499} />
                <img className="GBNSEctionIMG" src={GBNSectionIMG} alt="we" width={436} height={499} />
                <img className="GBNSEctionIMG" src={GBNSectionIMG} alt="we" width={436} height={499} />
                <img className="GBNSEctionIMG" src={GBNSectionIMG} alt="we" width={436} height={499} />
                <img className="GBNSEctionIMG" src={GBNSectionIMG} alt="we" width={436} height={499} />
            </section>
            <section className="FAQMembershipSection">
                <div className="container">
                    <div className="wrapperFAQs">
                        <h2 className="titleFAQ">FAQ</h2>
                        <ul className="wrapperFAQAnswers">
                            <li className="FAQAnswer">
                                <h3 className="titleAnswer">is there a monthly fee? <svg className="iconArrowDownAnswer" width={33} height={33}><use xlinkHref={`${sprite}#icon-arrow-down`} /></svg></h3>
                                <p className="textAnswer">Yes, there is a monthly licensing fee. Please contact us to find out more. </p>
                            </li>
                            <li className="FAQAnswer">
                                <h3 className="titleAnswer">How do i join? <svg className="iconArrowDownAnswer" width={33} height={33}><use xlinkHref={`${sprite}#icon-arrow-down`} /></svg></h3>
                                <p className="textAnswer">Yes, there is a monthly licensing fee. Please contact us to find out more. </p>
                            </li>
                            <li className="FAQAnswer">
                                <h3 className="titleAnswer">do i need to have my own company? <svg className="iconArrowDownAnswer" width={33} height={33}><use xlinkHref={`${sprite}#icon-arrow-down`} /></svg></h3>
                                <p className="textAnswer">Yes, there is a monthly licensing fee. Please contact us to find out more. </p>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapperPhotoFAQs">
                        <img className='wrapperPhotoFAQsIMG' src={FAQsIMG} alt="Answer" width={534} height={499} />
                    </div>
                </div>
                <div className="container titleFAQContainer">
                    <h2 className="titleFAQ">interested? leave your contact information & we will contact you for details</h2>
                    <form className="formFAQs" action="">
                        <label htmlFor="inputForUserNameFAQ" className="labelInputFAQ">
                            <input type="text" className="inputUserDateFAQ" id="inputForUserNameFAQ" required />
                            <span className="textInInputFAQ">first name</span>
                        </label>
                        <label htmlFor="inputForUserSNameFAQ" className="labelInputFAQ">
                            <input type="text" className="inputUserDateFAQ" id="inputForUserSNameFAQ" required />
                            <span className="textInInputFAQ">last name</span>
                        </label>
                        <label htmlFor="inputForUserEmailFAQ" className="labelInputFAQ">
                            <input type="email" className="inputUserDateFAQ" id="inputForUserEmailFAQ" required />
                            <span className="textInInputFAQ">e-mail</span>
                        </label>
                        <label htmlFor="inputForUserPhoneFAQ" className="labelInputFAQ">
                            <input type="phone" className="inputUserDateFAQ" id="inputForUserPhoneFAQ" required />
                            <span className="textInInputFAQ">phone number</span>
                        </label>
                        <button className='mainContactBtn mainContactBtnFAQ'>Join us</button>
                    </form>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className="titleRealEstateOfOurAgents">real estate of our agents</h2>
                </div>
                <PropertiesSlider />
            </section>
            <Footer />
        </>
    )
}