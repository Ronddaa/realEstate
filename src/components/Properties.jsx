import PropertiesIMG from '../assets/propertiesSlide.webp'
import './Properties.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useEffect, useState } from 'react';


export default function PropertiesSlider() {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 767) {
                setSlidesPerView(1);
            } else if (screenWidth <= 1158) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        }

        // Вызовите функцию handleResize при загрузке страницы
        handleResize();

        window.addEventListener('resize', handleResize);

        // Убираем слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <section className='PropertiesSlider' id='PropertiesSlider'>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    slidesPerView={slidesPerView}
                    effect='coverflow'
                    navigation
                    modules={[Navigation, EffectCoverflow]}>
                    <SwiperSlide className="slideProperties">
                        <img src={PropertiesIMG} alt="Building" className="slidePropertiesIMG" width={250} height={560} />
                        <article className='wrapperPropertiesInfo'>
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