import './Events.css'
import eventsHeroIMG from '../assets/eventsHeroIMG.webp'
import Header from './Header'
import Footer from './Footer'

export default function Events() {
    return (
        <>
            <Header />
            
            <section className='eventsHeroSection'>
                <div className="container">
                    <h1 className="titleEvents"><span>EVE</span>NTS</h1>
                    <div className='wrapperMainBtn wrapperMainBtnEvents'>
                        <button className='mainContactBtn mainContactBtnEvents' id='mainContactBtnJoinUs'>Join us</button>
                        <button className='mainContactBtn mainContactBtnEvents'>Contact agent</button>
                    </div>
                </div>
                <img src={eventsHeroIMG} alt="events" className="eventsHeroIMG" />
                <div className="container">
                    <ul className="wrapperNextEvents">
                        <li className="eventsCard">
                            <article className='eventCardArticleIMG'>
                                <h2 className="titleEventCardDate">20 24</h2>
                                <p className="textEventCard">14 January</p>
                            </article>
                            <article className='eventCardArticle'>
                                <h2 className="titleEventCard">party of the year</h2>
                                <p className="textEventCardInfo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos deleniti tempore autem eum, voluptatibus nisi harum natus illum fugit corporis eaque at soluta expedita ipsum cumque aperiam labore sit excepturi ad vero.</p>
                            </article>
                        </li>
                        <li className="eventsCard">
                            <article className='eventCardArticleIMG'>
                                <h2 className="titleEventCardDate">20 24</h2>
                                <p className="textEventCard">14 January</p>
                            </article>
                            <article className='eventCardArticle'>
                                <h2 className="titleEventCard">party of the year</h2>
                                <p className="textEventCardInfo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos deleniti tempore autem eum, voluptatibus nisi harum natus illum fugit corporis eaque at soluta expedita ipsum cumque aperiam labore sit excepturi ad vero.</p>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    )
}