import './AreaGuides.css'
import areaGuidesHeroIMG from '../assets/areaguidesHeroIMG.webp'
import guidesIMG from '../assets/guidesIMG.webp'
import Footer from './Footer'
import Header from './Header'
import { useEffect, useState } from 'react'
import { ModalJoinUs } from './Modals'
import modalJoinUsIMG from '../assets/modalJoinUsIMG.webp'

export default function AreaGuides() {
    const [modalPrizeIsOpen, setModalPrizeOpen] = useState(false);

    useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
        <>
            <Header />

            <section className='areaguidesHeroSection'>
                <div className="container">
                    <h1 className="titleAreaGuides"><span>area</span> guides</h1>
                    <div className='wrapperMainBtn wrapperMainBtnAreaguides'>
                        <button className='mainContactBtn mainContactBtnAreaguides' id='mainContactBtnJoinUs' onClick={() => setModalPrizeOpen(true)}>Join us</button>
                    </div>
                </div>
                <img src={areaGuidesHeroIMG} alt="building" className="areaguidesHeroIMG" />
            </section>
            <section className='guidesSection'>
                <div className="container">
                    <ul className="wrapperGuidesCard">
                        <li className="guidesCard">
                            <img src={guidesIMG} alt="guide" className="guidesIMG" width={1033} height={744} />
                            <article className='wrapperGuidesInfo'>
                                <h2 className="titleGuidesInfo">notting hill</h2>
                                <p className="textGuidesInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="linkToCheckGuidesIngo">View Area</a>
                            </article>
                        </li>
                        <li className="guidesCard">
                            <img src={guidesIMG} alt="guide" className="guidesIMG" width={1033} height={744} />
                            <article className='wrapperGuidesInfo'>
                                <h2 className="titleGuidesInfo">Canary wharf</h2>
                                <p className="textGuidesInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="linkToCheckGuidesIngo">View Area</a>
                            </article>
                        </li>
                        <li className="guidesCard">
                            <img src={guidesIMG} alt="guide" className="guidesIMG" width={1033} height={744} />
                            <article className='wrapperGuidesInfo'>
                                <h2 className="titleGuidesInfo">camden</h2>
                                <p className="textGuidesInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="linkToCheckGuidesIngo">View Area</a>
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