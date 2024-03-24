import '../components/Agents.css'
import Header from './Header'
import agentsHeroIMG from '../assets/agentsHeroIMG.webp'
import OurPeopleTeamIMG from '../assets/agent.webp'
import Reviews from './Reviews'
import Footer from './Footer'
import { useEffect } from 'react'

export default function Agents() {
    useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
        <>
            <Header />
            <section className='agentsHero'>
                <div className="container">
                    <h1 className="titleAgentsComponent"><span>AGE</span>NTS</h1>
                    <div className='wrapperMainBtn wrapperMainBtnAgents'>
                        <button className='mainContactBtn mainContactBtnAgents'>Join us</button>
                        <button className='mainContactBtn mainContactBtnAgents'>Contact agent</button>
                    </div>
                </div>
                <img src={agentsHeroIMG} alt="" className="agentsHeroIMG" />
            </section>
            <section className='ourAgentsSection'>
                <div className="container">
                    <h2 className="titleOurAgents">our agents</h2>
                    <div className="wrapperSearchAgents">
                        <input className='inputSearchAgent' type="text" placeholder='Search' />
                        <input className='inputSearchAgent' type="text" placeholder='Service' />
                        <input className='inputSearchAgent' type="text" placeholder='Area' />
                    </div>
                    <ul className="wrapperOurTeamPeople">
                        <li className="OurPeopleTeam">
                            <img src={OurPeopleTeamIMG} alt="People" className="ourPeopleTeamIMG" width={504} height={585} />
                            <h3 className="titlePeopleNameTeam">Gabriella nazar</h3>
                            <p className="textAboutPosPeople">Agent</p>
                            <a href="#" className="linkToProfileThisAgent">view profile</a>
                        </li>
                        <li className="OurPeopleTeam">
                            <img src={OurPeopleTeamIMG} alt="People" className="ourPeopleTeamIMG" width={504} height={585} />
                            <h3 className="titlePeopleNameTeam">bohdan mysiuk</h3>
                            <p className="textAboutPosPeople">Agent</p>
                            <a href="#" className="linkToProfileThisAgent">view profile</a>
                        </li>
                        <li className="OurPeopleTeam">
                            <img src={OurPeopleTeamIMG} alt="People" className="ourPeopleTeamIMG" width={504} height={585} />
                            <h3 className="titlePeopleNameTeam">nestor mytskan</h3>
                            <p className="textAboutPosPeople">Agent</p>
                            <a href="#" className="linkToProfileThisAgent">view profile</a>
                        </li>
                        <li className="OurPeopleTeam">
                            <img src={OurPeopleTeamIMG} alt="People" className="ourPeopleTeamIMG" width={504} height={585} />
                            <h3 className="titlePeopleNameTeam">SABINA KLARKSON</h3>
                            <p className="textAboutPosPeople">Agent</p>
                            <a href="#" className="linkToProfileThisAgent">view profile</a>
                        </li>
                        <li className="OurPeopleTeam">
                            <img src={OurPeopleTeamIMG} alt="People" className="ourPeopleTeamIMG" width={504} height={585} />
                            <h3 className="titlePeopleNameTeam">SABINA KLARKSON</h3>
                            <p className="textAboutPosPeople">Agent</p>
                            <a href="#" className="linkToProfileThisAgent">view profile</a>
                        </li>
                        <li className="OurPeopleTeam">
                            <img src={OurPeopleTeamIMG} alt="People" className="ourPeopleTeamIMG" width={504} height={585} />
                            <h3 className="titlePeopleNameTeam">SABINA KLARKSON</h3>
                            <p className="textAboutPosPeople">Agent</p>
                            <a href="#" className="linkToProfileThisAgent">view profile</a>
                        </li>
                        <li className="OurPeopleTeam">
                            <img src={OurPeopleTeamIMG} alt="People" className="ourPeopleTeamIMG" width={504} height={585} />
                            <h3 className="titlePeopleNameTeam">SABINA KLARKSON</h3>
                            <p className="textAboutPosPeople">Agent</p>
                            <a href="#" className="linkToProfileThisAgent">view profile</a>
                        </li>
                        <li className="OurPeopleTeam">
                            <img src={OurPeopleTeamIMG} alt="People" className="ourPeopleTeamIMG" width={504} height={585} />
                            <h3 className="titlePeopleNameTeam">SABINA KLARKSON</h3>
                            <p className="textAboutPosPeople">Agent</p>
                            <a href="#" className="linkToProfileThisAgent">view profile</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='reviewsSection'>
                <h2 className="titleReviews">Reviews</h2>
                <Reviews />
            </section>
            <Footer />
        </>
    )
}