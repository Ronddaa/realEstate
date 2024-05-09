import '../components/OurTeam.css'
import Header from './Header'
import OurTeamHeroIMG from '../assets/ourTeamMain.webp'
import OurPlusInfoIMG from '../assets/OurPlusInfoIMG.webp'
import PropertiesSlider from './Properties'
import Footer from './Footer'
import { useEffect } from 'react'


export default function OurTeam() {
    useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
        <>
            <Header />
            <section className="ourTeamHero">
                <div className="container">
                    <h1 className="titleOurTeamSection"><span>Our</span> Team</h1>
                    <div className='wrapperMainBtn wrapperMainBtnTeam'>
                        <button className='mainContactBtn mainContactBtnTeam'>Join us</button>
                    </div>
                </div>
                <img className='ourTeamHeroIMG' src={OurTeamHeroIMG} alt="Building" />
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                            <div><img className='infoAboutUsTeamIMG' src={OurPlusInfoIMG} alt="People" width={842} height={670} /></div>
                        </li>
                        <li className="infoAboutUsTeam">
                            <div><img className='infoAboutUsTeamIMG' src={OurPlusInfoIMG} alt="People" width={842} height={670} /></div>                            
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 className="titleRealEstateOfOurAgents">real estate of our agents</h2>
                <PropertiesSlider />
            </section>
            <Footer />
        </>
    )
}