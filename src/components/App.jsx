import './App.css'
import heroIMG from '../assets/heroIMG.webp'
import saleIMG from '../assets/sale.webp'
import wantIMG1 from '../assets/wantSection1.webp'
import wantIMG2 from '../assets/wantSection2.webp'
import wantIMG3 from '../assets/wantSection3.webp'
import wantIMG4 from '../assets/wantSection4.webp'
import PropertiesSlider from './Properties'

function MainTitle() {
  return (
  <h1 className="mainTitle"><span>GBN &</span> partners</h1>
  )
}

export default function App() {
  return (
    <>
    <section className='heroSection'>
      <div className="container">
        <MainTitle />
        <div className="wrapperMainText">
          <div className='wrapperHeroMainText'>
            <p className="heroMainText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='wrapperMainBtn'>
            <button className='mainContactBtn'>Join us</button>
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
      </section>
    </>  
  )
}