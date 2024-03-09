import PropertiesIMG from '../assets/propertiesSlide.webp'
import userProperties from '../assets/userProperties.webp'
import './Properties.css'

export default function PropertiesSlider() {
    return (
        <>
            <section className='PropertiesSlider'>
                <ul className="wrapperSlideProperties">
                    <li className="slideProperties">
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
                    <li className="slideProperties">
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
                    <li className="slideProperties">
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
                    <li className="slideProperties">
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
                    <li className="slideProperties">
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
            </section>
        </>
    )
}