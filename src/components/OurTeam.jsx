import '../components/OurTeam.css'
import Header from './Header'
import OurTeamHeroIMG from '../assets/ourTeamMain.webp'

export default function OurTeam() {
    return (
        <>
            <Header />
            <section className="ourTeamHero">
                <div className="container">
                    <h1 className="titleOurTeamSection"><span>Our</span> Team</h1>
                    <div className='wrapperMainBtn wrapperMainBtnTeam'>
                        <button className='mainContactBtn mainContactBtnTeam'>Join us</button>
                        <button className='mainContactBtn mainContactBtnTeam'>Contact agent</button>
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
                </div>
            </section>
        </>
    )
}