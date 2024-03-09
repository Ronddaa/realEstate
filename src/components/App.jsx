import './App.css'
import heroIMG from '../assets/heroIMG.webp'
import saleIMG from '../assets/sale.webp'
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
    </>  
  )
}