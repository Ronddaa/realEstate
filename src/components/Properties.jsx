import PropertiesIMG from '../assets/propertiesSlide.webp'
import userProperties from '../assets/userProperties.webp'
import './Properties.css'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle';

// eslint-disable-next-line no-unused-vars
const swiperProperties = new Swiper('.swiper', {
    direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


export default function PropertiesSlider() {
    return (
        <>
            <section className='PropertiesSlider swiper'>
                <ul className="wrapperSlideProperties swiper-wrapper">
                    <li className="slideProperties swiper-slide">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" />
                        <article className='wrapperPropertiesInfo'>
                            <div className="wrapperAgentInfo">
                                <img src={userProperties} alt="User" className="userPhotoIMG" />            
                                <p className="textUserCommentProperties">Listed by Mary Heard</p>
                            </div>
                            <h3 className="titleAboutCardProperties">SKYLAND</h3>
                            <p className="textAboutCardPropetries">Canary Wharf</p>
                            <ol className="wrapperLostCardProperties">
                                <li className="textAboutCardProperties">2 Rooms</li>
                                <li className="textAboutCardProperties">1 Bath</li>
                                <li className="textAboutCardProperties">680sqft</li>
                            </ol>
                            <h4 className="titlePriceCardProperties">&#163; 580,660</h4>
                            <a href="#" className="linkToReviewsCardProperties">view property</a>
                        </article>
                    </li>
                    <li className="slideProperties swiper-slide">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" />
                        <article className='wrapperPropertiesInfo'>
                            <div className="wrapperAgentInfo">
                                <img src={userProperties} alt="User" className="userPhotoIMG" />            
                                <p className="textUserCommentProperties">Listed by Mary Heard</p>
                            </div>
                            <h3 className="titleAboutCardProperties">SKYLAND</h3>
                            <p className="textAboutCardPropetries">Canary Wharf</p>
                            <ol className="wrapperLostCardProperties">
                                <li className="textAboutCardProperties">2 Rooms</li>
                                <li className="textAboutCardProperties">1 Bath</li>
                                <li className="textAboutCardProperties">680sqft</li>
                            </ol>
                            <h4 className="titlePriceCardProperties">&#163; 580,660</h4>
                            <a href="#" className="linkToReviewsCardProperties">view property</a>
                        </article>
                    </li>
                    <li className="slideProperties swiper-slide">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" />
                        <article className='wrapperPropertiesInfo'>
                            <div className="wrapperAgentInfo">
                                <img src={userProperties} alt="User" className="userPhotoIMG" />
                                <p className="textUserCommentProperties">Listed by Mary Heard</p>
                            </div>
                            <h3 className="titleAboutCardProperties">SKYLAND</h3>
                            <p className="textAboutCardPropetries">Canary Wharf</p>
                            <ol className="wrapperLostCardProperties">
                                <li className="textAboutCardProperties">2 Rooms</li>
                                <li className="textAboutCardProperties">1 Bath</li>
                                <li className="textAboutCardProperties">680sqft</li>
                            </ol>
                            <h4 className="titlePriceCardProperties">&#163; 580,660</h4>
                            <a href="#" className="linkToReviewsCardProperties">view property</a>
                        </article>
                    </li>
                    <li className="slideProperties swiper-slide">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" />
                        <article className='wrapperPropertiesInfo'>
                            <div className="wrapperAgentInfo">
                                <img src={userProperties} alt="User" className="userPhotoIMG" />
                                <p className="textUserCommentProperties">Listed by Mary Heard</p>
                            </div>
                            <h3 className="titleAboutCardProperties">SKYLAND</h3>
                            <p className="textAboutCardPropetries">Canary Wharf</p>
                            <ol className="wrapperLostCardProperties">
                                <li className="textAboutCardProperties">2 Rooms</li>
                                <li className="textAboutCardProperties">1 Bath</li>
                                <li className="textAboutCardProperties">680sqft</li>
                            </ol>
                            <h4 className="titlePriceCardProperties">&#163; 580,660</h4>
                            <a href="#" className="linkToReviewsCardProperties">view property</a>
                        </article>
                    </li>
                    <li className="slideProperties swiper-slide">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" />
                        <article className='wrapperPropertiesInfo'>
                            <div className="wrapperAgentInfo">
                                <img src={userProperties} alt="User" className="userPhotoIMG" />
                                <p className="textUserCommentProperties">Listed by Mary Heard</p>
                            </div>
                            <h3 className="titleAboutCardProperties">SKYLAND</h3>
                            <p className="textAboutCardPropetries">Canary Wharf</p>
                            <ol className="wrapperLostCardProperties">
                                <li className="textAboutCardProperties">2 Rooms</li>
                                <li className="textAboutCardProperties">1 Bath</li>
                                <li className="textAboutCardProperties">680sqft</li>
                            </ol>
                            <h4 className="titlePriceCardProperties">&#163; 580,660</h4>
                            <a href="#" className="linkToReviewsCardProperties">view property</a>
                        </article>
                    </li>
                </ul>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </section>
        </>
    )
}