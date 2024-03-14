import '../components/Reviews.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectCoverflow } from 'swiper/modules';
import userProperties from '../assets/userProperties.webp'

export default function Reviews() {
    return (
        <>
        <section className="reviewsSection">
                <Swiper
                    centeredSlides={true}
                spaceBetween={50}
                loop={true}
                slidesPerView={2.5}
                effect='card'
                navigation  
                modules={[Navigation, EffectCoverflow]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                
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