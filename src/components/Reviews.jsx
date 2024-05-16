import '../components/Reviews.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectCoverflow } from 'swiper/modules';
import userProperties from '../assets/userProperties.webp'
import { useEffect, useState } from 'react';


export default function Reviews() {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 767) {
                setSlidesPerView(1);
            } else if (screenWidth <= 1158) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(2.5);
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
        <section className="reviewsSection">
                <Swiper
                    centeredSlides={true}
                spaceBetween={50}
                loop={true}
                slidesPerView={slidesPerView}
                effect='card'
                navigation  
                modules={[Navigation, EffectCoverflow]}>
                
                    <SwiperSlide>
                        <>
                        <article className="wrapperReviews">
                            <div className="wrapperUserInfoReviews">
                                <img src={userProperties} alt="User" className="userPhotoReviews" width={116} height={116} />
                                <div className="noname">
                                    <h3 className="titleUserNameReviews">Alex Dolgiy</h3>
                                    <p className="textUserNameReviews">Bought properties</p>
                                </div>
                            </div>
                            <p className="textUserComments">The agents showed great interest in my needs and wishes. The company`s team of professionals has deep knowledge in the field of real estate. They provided comprehensive answers to all my questions and helped me make an informed decision.GOOD JOB!!</p>
                            <div className="wrapperFooterComment">
                                <p className="infoAboutAgent">Agent - SABINA KLARKSON</p>
                                <p className="textCommentDate">24.01.2024</p>
                            </div>
                        </article>
                        </>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className="wrapperReviews">
                            <div className="wrapperUserInfoReviews">
                                <img src={userProperties} alt="User" className="userPhotoReviews" width={116} height={116} />
                                <div className="noname">
                                    <h3 className="titleUserNameReviews">Alex Dolgiy</h3>
                                    <p className="textUserNameReviews">Bought properties</p>
                                </div>
                            </div>
                            <p className="textUserComments">The agents showed great interest in my needs and wishes. The company`s team of professionals has deep knowledge in the field of real estate. They provided comprehensive answers to all my questions and helped me make an informed decision.GOOD JOB!!</p>
                            <div className="wrapperFooterComment">
                                <p className="infoAboutAgent">Agent - SABINA KLARKSON</p>
                                <p className="textCommentDate">24.01.2024</p>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className="wrapperReviews">
                            <div className="wrapperUserInfoReviews">
                                <img src={userProperties} alt="User" className="userPhotoReviews" width={116} height={116} />
                                <div className="noname">
                                    <h3 className="titleUserNameReviews">Alex Dolgiy</h3>
                                    <p className="textUserNameReviews">Bought properties</p>
                                </div>
                            </div>
                            <p className="textUserComments">The agents showed great interest in my needs and wishes. The company`s team of professionals has deep knowledge in the field of real estate. They provided comprehensive answers to all my questions and helped me make an informed decision.GOOD JOB!!</p>
                            <div className="wrapperFooterComment">
                                <p className="infoAboutAgent">Agent - SABINA KLARKSON</p>
                                <p className="textCommentDate">24.01.2024</p>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className="wrapperReviews">
                            <div className="wrapperUserInfoReviews">
                                <img src={userProperties} alt="User" className="userPhotoReviews" width={116} height={116} />
                                <div className="noname">
                                    <h3 className="titleUserNameReviews">Alex Dolgiy</h3>
                                    <p className="textUserNameReviews">Bought properties</p>
                                </div>
                            </div>
                            <p className="textUserComments">The agents showed great interest in my needs and wishes. The company`s team of professionals has deep knowledge in the field of real estate. They provided comprehensive answers to all my questions and helped me make an informed decision.GOOD JOB!!</p>
                            <div className="wrapperFooterComment">
                                <p className="infoAboutAgent">Agent - SABINA KLARKSON</p>
                                <p className="textCommentDate">24.01.2024</p>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className="wrapperReviews">
                            <div className="wrapperUserInfoReviews">
                                <img src={userProperties} alt="User" className="userPhotoReviews" width={116} height={116} />
                                <div className="noname">
                                    <h3 className="titleUserNameReviews">Alex Dolgiy</h3>
                                    <p className="textUserNameReviews">Bought properties</p>
                                </div>
                            </div>
                            <p className="textUserComments">The agents showed great interest in my needs and wishes. The company`s team of professionals has deep knowledge in the field of real estate. They provided comprehensive answers to all my questions and helped me make an informed decision.GOOD JOB!!</p>
                            <div className="wrapperFooterComment">
                                <p className="infoAboutAgent">Agent - SABINA KLARKSON</p>
                                <p className="textCommentDate">24.01.2024</p>
                            </div>
                        </article>
                    </SwiperSlide>
            </Swiper>
        </section>
        </>
    )
}