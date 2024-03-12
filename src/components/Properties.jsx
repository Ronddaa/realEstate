import PropertiesIMG from '../assets/propertiesSlide.webp'
import userProperties from '../assets/userProperties.webp'
import './Properties.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';


export default function PropertiesSlider() {
    return (
        <>
            <section className='PropertiesSlider' id='PropertiesSlider'>
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                    slidesPerView={3}
                    effect='coverflow'
                        navigation
                        modules={[Navigation, EffectCoverflow]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide className="slideProperties">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" width={250} height={560} />
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
                    </SwiperSlide>
                    <SwiperSlide className="slideProperties">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" width={250} height={560} />
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
                    </SwiperSlide>
                    <SwiperSlide className="slideProperties">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" width={250} height={560} />
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
                    </SwiperSlide>
                    <SwiperSlide className="slideProperties">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" width={250} height={560} />
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
                    </SwiperSlide>
                    <SwiperSlide className="slideProperties">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" width={250} height={560} />
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
                        </SwiperSlide>
                        </Swiper>
            </section>
        </>
    )
}