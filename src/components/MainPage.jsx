import './App.css'
import heroIMG from '../assets/heroIMG.webp'
import saleIMG from '../assets/sale.webp'
import agentIMG from '../assets/agent.webp'
import wantIMG1 from '../assets/wantSection1.webp'
import wantIMG2 from '../assets/wantSection2.webp'
import wantIMG3 from '../assets/wantSection3.webp'
import wantIMG4 from '../assets/wantSection4.webp'
import PropertiesSlider from './Properties'
import Reviews from './Reviews'
import Footer from './Footer'
import Header from './Header'
import { ModalJoinUs } from './Modals'
import modalJoinUsIMG from '../assets/modalJoinUsIMG.webp'
import { useState, useEffect } from 'react'


export function MainTitle() {
  return (
  <h1 className="mainTitle"><span>GBN &</span> partners</h1>
  )
}

export default function MainPage() {
  const [modalPrizeIsOpen, setModalPrizeOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
      <>
      <Header />
    <section className='heroSection'>
      <div className="container">
        <MainTitle />
        <div className="wrapperMainText">
          <div className='wrapperHeroMainText'>
            <p className="heroMainText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='wrapperMainBtn'>
            <button className='mainContactBtn' id='mainContactBtnJoinUs' onClick={() => setModalPrizeOpen(true)}>Join us</button>
            <button className='mainContactBtn'>Contact agent</button>
          </div>
        </div>
      </div>    
      <img className='heroIMG' src={heroIMG} alt="GBN" height={500} />
      </section>
      <section className='aboutUs'>
        <div className="container">
          <h2 className="titleAboutUs">ABOUT US & OUR SERVICES</h2>
          <p className="textAboutUs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.</p>
          <ul className="wrapperAboutInfo">
            <li className="AboutInfo">
              <article className='wrapperTitleInfo'>
                <h3 className="titleInfo">Rental services</h3>
                <p className="textInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </article>
              <div className="containerInfoIMG"><img className='infoIMG' src={heroIMG} alt="rent" /></div>
            </li>
            <li className="AboutInfo">
              <article className='wrapperTitleInfo'>
                <h3 className="titleInfo">buying PROperties</h3>
                <p className="textInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </article>
              <div className="containerInfoIMG"><img className='infoIMG' src={heroIMG} alt="rent" /></div>
            </li>
            <li className="AboutInfo">
              <article className='wrapperTitleInfo'>
                <h3 className="titleInfo">properties for sale</h3>
                <p className="textInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </article>
              <div className="containerInfoIMG"><img className='infoIMG' src={heroIMG} alt="rent" /></div>
            </li>
            <li className="AboutInfo">
              <article className='wrapperTitleInfo'>
                <h3 className="titleInfo">consultation of our agents</h3>
                <p className="textInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </article>
              <div className="containerInfoIMG"><img className='infoIMG' src={heroIMG} alt="rent" /></div>
            </li>
          </ul>
        </div>
      </section>
      <section className='propertiesSection'>
        <div className="container">
          <h2 className="titleProperties">Properties</h2>
        </div>
        <ul className="wrapperProperties">
          <li>
            <a href='#' className="wrapperPropertiesLink">
              <h3 className="titleSale">FOR rent</h3>
              <img src={saleIMG} alt="Sale" className="rentSaleIMG" />
            </a>
          </li>
          <li>
            <a href='#' className="wrapperPropertiesLink">
              <h3 className="titleSale">for sale</h3>
              <img src={saleIMG} alt="Sale" className="rentSaleIMG" />
            </a>
          </li>
        </ul>
        <PropertiesSlider />
      </section>
        <section className='wantSection'>
          <div className="container">
        <h2 className="titleWant">do you want to be part of our team?</h2>
        <p className="textWant">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.</p>
        <div className="wrapperWannaInfo">
          <div className="wrapperWantIMG">
            <img src={wantIMG1} alt="rooms" className="wantIMG" width={771} height={578} />
            <img src={wantIMG2} alt="rooms" className="wantIMG" width={771} height={578} />
            <img src={wantIMG3} alt="rooms" className="wantIMG" width={771} height={578} />
            <img src={wantIMG4} alt="rooms" className="wantIMG" width={771} height={578} />
          </div>
          <article className='wrapperWantInfo'>
            <h3 className="titleWantInfo">access to rightmove, Zoopla and OneMarket</h3>
            <p className="textWantInfo">Our company provides free access to OneMarket, Zoopla and RightMove, as well as many other platforms for the duration of your membership with us.</p>
            <button className='mainContactBtn mainContactBtnY'>Join us</button>
          </article>
            </div>
            </div>
      </section>
      <section className='agentsSection'>
        <div className="container">
          <h2 className="titleAgents">our agents</h2>
          <ul className="wrapperAgentsList">
            <li className="wrapperAgent">
              <img src={agentIMG} alt="Agent" className="agentsIMG" />
              <article className='wrapperAgentsInfo'>
                <h3 className="titleAgentsName">Eva Smith</h3>
                <p className="textAgentPos">Agent</p>
                <a href="tel:+02037657788" className="phoneAgentsLink">+ 020 - 3765 - 7788</a>
                <a href="#" className="profileAgentsLink">view profile</a>
              </article>
            </li>
            <li className="wrapperAgent">
              <img src={agentIMG} alt="Agent" className="agentsIMG" />
              <article className='wrapperAgentsInfo'>
                <h3 className="titleAgentsName">Eva Smith</h3>
                <p className="textAgentPos">Agent</p>
                <a href="tel:+02037657788" className="phoneAgentsLink">+ 020 - 3765 - 7788</a>
                <a href="#" className="profileAgentsLink">view profile</a>
              </article>
            </li>
            <li className="wrapperAgent">
              <img src={agentIMG} alt="Agent" className="agentsIMG" />
              <article className='wrapperAgentsInfo'>
                <h3 className="titleAgentsName">Eva Smith</h3>
                <p className="textAgentPos">Agent</p>
                <a href="tel:+02037657788" className="phoneAgentsLink">+ 020 - 3765 - 7788</a>
                <a href="#" className="profileAgentsLink">view profile</a>
              </article>
            </li>
          </ul>
          <a href="#" className="allAgentsLink">all agents</a>
        </div>
      </section>
      <section className='reviewsSection'>
        <h2 className="titleReviews">Reviews</h2>
        <Reviews />
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