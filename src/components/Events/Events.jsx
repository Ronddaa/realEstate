import './Events.css'
import eventsHeroIMG from './eventsHeroIMG.webp'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useState } from 'react'
import { ModalJoinUs } from '../Modals'
import modalJoinUsIMG from './modalJoinUsIMG.webp'


export default function Events() {
    const [modalPrizeIsOpen, setModalPrizeOpen] = useState(false);
    useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
        <>
            <Header />
            
            <section className='eventsHeroSection'>
                <div className="containerTitle">
                    <h1 className="titleEvents"><span>EVE</span>NTS</h1>
                    {/* <div className='wrapperMainBtn wrapperMainBtnEvents'>
                        <button className='mainContactBtn mainContactBtnEvents' id='mainContactBtnJoinUs' onClick={() => setModalPrizeOpen(true)}>Join us</button>
                    </div> */}
                <img src={eventsHeroIMG} alt="events" className="eventsHeroIMG" />
                </div>
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