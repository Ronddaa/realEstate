import "./Blog.css";
import heroBlogIMG from './blogHeroIMG.webp'
import blogLastNewsIMG from './baliBlog.webp'
import blogOldNewsIMG from './blogOldNewsIMG.webp'
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from 'react'
import { ModalJoinUs } from '../Modals'
import modalJoinUsIMG from './modalJoinUsIMG.webp'


export default function Blog() {
    const [modalPrizeIsOpen, setModalPrizeOpen] = useState(false);
    useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);
    return (
        <>
            <Header />
            <section className="blogHeroSection">
                <div className="container">
                    <h1 className="titleBlog"><span>bl</span>og</h1>
                    <div className='wrapperMainBtn wrapperMainBtnBlog'>
                        <button className='mainContactBtn mainContactBtnBlog' id='mainContactBtnJoinUs' onClick={() => setModalPrizeOpen(true)}>Join us</button>
                    </div>
                </div>
                <img className="heroBlogIMG" src={heroBlogIMG} alt="building" />
            </section>
            <section className="ourBlogSection">
                <div className="container wrapperLastNews">
                    <div className="wrapperLastNewsIMG">
                        <img className="lastNewsIMG" src={blogLastNewsIMG} alt="News" width={790} height={500} />
                    </div>
                    <article className="wrapperLastNewsInfo">
                        <p className="textDateOfPublication">NOV 2023</p>
                        <h2 className="titleLastNews">Bali: The Ultimate Investment Destination - Here`s Why</h2>
                        <p className="ingoAboutNews">Bali, often referred to as the &quot;Island of the Gods,&quot; is not only a haven for tourists but also a paradise for real estate investors. Here are ten compelling reasons why now is the best time to consider investing in Bali`s vibrant property market:</p>
                        <article className="wrapperReadMoreLastNews" id="wrapperReadMoreLastNews">
                            <ul>
                                <li>
                                    <span>Tourist Influx:</span> Bali`s popularity as a tourist destination is soaring, with the island expecting to welcome over 7.5 million international tourists this year alone. This surge in tourism promises a flourishing market for rental properties and accommodations.
                                </li>
                                <li>
                                    <span>Recognition:</span> Indonesia`s receipt of 14 awards at the ASEAN Tourism Forum 2024 underscores its commitment to sustainable tourism and hospitality. These accolades highlight Bali`s appeal as a top destination for travelers seeking unforgettable experiences.
                                </li>
                                <li>
                                    <span>Infrastructure Development:</span> The upcoming construction of a railway network in Bali, scheduled to commence in September 2024, will revolutionize transportation across the island. This development will enhance accessibility and property value in Bali`s southern districts.
                                </li>
                                <li>
                                    <span>High Rental Yields:</span> Bali offers an impressive average annual increase in rents of 20%, making it an attractive prospect for property investors seeking lucrative returns on their investment.
                                </li>
                                <li>
                                    <span>Strong Occupancy Rates:</span> With an average occupancy rate ranging from 70% to 90% throughout the year, Bali ensures consistent demand for rental properties and accommodations, providing stability for investors.
                                </li>
                                <li>
                                    <span>Favorable Environment:</span> Bali enjoys a peaceful geopolitical climate and offers favorable taxation policies, creating an ideal atmosphere for investment and business growth.
                                </li>
                                <li>
                                    <span>Capital Appreciation:</span> Over the last five years, land values in Bali have surged by an astounding 300%, signaling strong growth potential and capital appreciation for property investors.
                                </li>
                                <li>
                                    <span>Year-round Tourism:</span> Thanks to its tropical climate, Bali`s tourism season lasts 365 days a year. This ensures a stable and lucrative market for tourism-related businesses and investments, offering investors long-term stability.
                                </li>
                                <li>
                                    <span>Global Recognition:</span> Bali`s global appeal is further solidified by its ranking as the 2nd best destination in 2022 and 1st in 2021 on TripAdvisor`s &quot;Best Destination in the World&quot; list. This recognition enhances its allure and attracts tourists from around the globe.
                                </li>
                                <li>
                                    <span>Economic Stability:</span> Bali maintains a low annual inflation rate of 2%, providing investors with stability and confidence for long-term financial planning and investments.
                                </li>
                            </ul>
                            <p>In conclusion, Bali stands as the premier destination for real estate investment, offering a unique blend of economic opportunity, natural beauty, and cultural richness. With its thriving tourism industry, robust infrastructure development, and favorable investment climate, Bali presents unparalleled opportunities for investors seeking profitable returns and long-term growth in their real estate portfolios.</p>
                        </article>
                        <button className="mainContactBtn mainContactBtnNewsReadMore" onClick={() => {
    const elementReadMode = document.querySelector('#wrapperReadMoreLastNews');
    if (elementReadMode.classList.contains('showReadMoreBlog')) {
        elementReadMode.classList.remove('showReadMoreBlog');
        window.scrollTo({
            top: elementReadMode, // Перемещаемся к кнопке с отступом вверх на 100 пикселей
            behavior: 'smooth' // Плавная прокрутка
        });
    } else {
        elementReadMode.classList.add('showReadMoreBlog');
    }
}}>read more</button>
                    </article>
                </div>
                <div className="container">
                    <ul className="wrapperOldNews">
                        <li className="OldNewsCard">
                            <img src={blogOldNewsIMG} alt="News" />
                            <article className="wrapperOldNewsInfo">
                                <p className="textDateOfPublicationOld"> NOV2023</p>
                                <h3 className="titleOldNews">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                                <a href="#" className="linkToReadAboutOldNews">read more</a>
                            </article>
                        </li>
                        <li className="OldNewsCard">
                            <img src={blogOldNewsIMG} alt="News" />
                            <article className="wrapperOldNewsInfo">
                                <p className="textDateOfPublicationOld"> NOV2023</p>
                                <h3 className="titleOldNews">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                                <a href="#" className="linkToReadAboutOldNews">read more</a>
                            </article>
                        </li>
                        <li className="OldNewsCard">
                            <img src={blogOldNewsIMG} alt="News" />
                            <article className="wrapperOldNewsInfo">
                                <p className="textDateOfPublicationOld"> NOV2023</p>
                                <h3 className="titleOldNews">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                                <a href="#" className="linkToReadAboutOldNews">read more</a>
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