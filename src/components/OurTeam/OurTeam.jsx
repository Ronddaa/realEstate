import './OurTeam.css'
import Header from '../Header'
import OurTeamHeroIMG from './ourTeamMain.webp'
import aboutUsIMGOne from './aboutUsIMGOne.webp'
import aboutUsIMGTwo from './aboutUsIMGTwo.webp'
import Footer from '../Footer'
import { useEffect, useState } from 'react'
import { ModalJoinUs } from '../Modals'
import modalJoinUsIMG from './modalJoinUsIMG.webp'



export default function OurTeam() {
    const [modalPrizeIsOpen, setModalPrizeOpen] = useState(false);
    useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
        <>
            <Header />
            <section className="ourTeamHero">
                <div className="containerTitle">
                    <h1 className="titleOurTeamSection"><span>Our</span> Team</h1>
                    {/* <div className='wrapperMainBtn wrapperMainBtnTeam'>
                        <button className='mainContactBtn mainContactBtnTeam' onClick={() => setModalPrizeOpen(true)}>Join us</button>
                    </div> */}
                <img className='ourTeamHeroIMG ourTeamHeroIMGDark' src={OurTeamHeroIMG} alt="Building" />
                </div>
            </section>
            <section className='storySection'>
                <div className="container">
                    <h2 className="titleOurStory">our story & our services</h2>
                    <p className="textOurStory">At <span>GBN & Partners</span>, we believe that buying or selling real estate should be more than just a deal, but a success story. <span>Founded in 2017</span>, our company has won the trust of our customers thanks to a high level of professionalism, individual approach and caring service.</p>
                    <ul className="wrapperOurPlus">
                        <li className="ourPlus">
                            <h3 className="titleOurPlusNumbers">01</h3>
                            <div className="gfdgwrvdsvbetrwsxcv">
                                <h4 className="titleAboutUsTeam">Professionalism</h4>
                                <p>our team consists of experienced professionals ready to provide you with the highest level of expertise.</p>
                            </div>
                        </li>
                        <li className="ourPlus">
                            <h3 className="titleOurPlusNumbers">02</h3>
                            <div className="gfdgwrvdsvbetrwsxcv">
                                <h4 className="titleAboutUsTeam">Individual approach</h4>
                                <p>We understand that every situation is unique. We are happy to work on the development of individual strategies for each client.</p>
                            </div>
                        </li>
                        <li className="ourPlus">
                            <h3 className="titleOurPlusNumbers">03</h3>
                            <div className="gfdgwrvdsvbetrwsxcv">
                                <h4 className="titleAboutUsTeam">Trust and transparency</h4>
                                <p>Customer relationships are based on openness and trust. We are committed to providing you with the information and guidance you need to make informed decisions.</p>
                            </div>
                        </li>
                    </ul>
                    <ul className="wrapperInfoAboutUs">
                        <li className="infoAboutUsTeam">
                            <p>The GBN Invest model has been built by modelling successful agents – it is proven. It allows you to have a model to follow, whether you have any previous estate agency experience or not, to successfully grow your business to achieve your goals and dreams.</p>
                            <div><img className='infoAboutUsTeamIMG' src={aboutUsIMGOne} alt="People" width={842} height={670} /></div>
                        </li>
                        <li className="infoAboutUsTeam">
                            <div><img className='infoAboutUsTeamIMG' src={aboutUsIMGTwo} alt="People" width={842} height={670} /></div>                            
                            <p>The GBN Invest model has been built by modelling successful agents – it is proven. It allows you to have a model to follow, whether you have any previous estate agency experience or not, to successfully grow your business to achieve your goals and dreams.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
            <ModalJoinUs
          isOpen={modalPrizeIsOpen}
          onClose={() => setModalPrizeOpen(false)}
        >
          <img className='modalJoinUsIMG' src={modalJoinUsIMG} alt="Building" width={287} height={757} />
            <article>
                <h2 className="titleModalJoinUs">join us</h2>
                <p className="textModalJoinUs">If you are interested in partnering with us, please fill out the form below and we will be in contact.</p>
                <form action="" className='formModalJoinUs'>
                    <label htmlFor="inputForUserNameModalJoinUs" className="labelInputModalJoinUs">
                        <input type="text" className="inputUserDateModalJoinUs" id="inputForUserNameModalJoinUs" required />
                        <span className="textInInputModalJoinUs">first name</span>
                    </label>
                    <label htmlFor="inputForUserSNameModalJoinUs" className="labelInputModalJoinUs">
                        <input type="text" className="inputUserDateModalJoinUs" id="inputForUserSNameModalJoinUs" required />
                        <span className="textInInputModalJoinUs">last name</span>
                    </label>
                    <label htmlFor="inputForUserEmailModalJoinUs" className="labelInputModalJoinUs">
                        <input type="email" className="inputUserDateModalJoinUs" id="inputForUserEmailModalJoinUs" required />
                        <span className="textInInputModalJoinUs">e-mail</span>
                    </label>
                    <label htmlFor="inputForUserPhoneModalJoinUs" className="labelInputModalJoinUs">
                        <input type="phone" className="inputUserDateModalJoinUs" id="inputForUserPhoneModalJoinUs" required />
                        <span className="textInInputModalJoinUs">phone number</span>
                    </label>
                </form>
            </article>
        </ModalJoinUs>
        </>
    )
}