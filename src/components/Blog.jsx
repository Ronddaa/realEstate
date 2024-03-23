import "./Blog.css";
import heroBlogIMG from '../assets/blogHeroIMG.webp'
import blogLastNewsIMG from '../assets/blogLastNewsIMG.webp'
import blogOldNewsIMG from '../assets/blogOldNewsIMG.webp'
import Header from "./Header";
import Footer from "./Footer";

export default function Blog() {
    return (
        <>
            <Header />
            <section className="blogHeroSection">
                <div className="container">
                    <h1 className="titleBlog"><span>bl</span>og</h1>
                    <div className='wrapperMainBtn wrapperMainBtnBlog'>
                        <button className='mainContactBtn mainContactBtnBlog' id='mainContactBtnJoinUs'>Join us</button>
                        <button className='mainContactBtn mainContactBtnBlog'>Contact agent</button>
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
                        <h2 className="titleLastNews">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                        <p className="ingoAboutNews">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        <button className="mainContactBtn mainContactBtnNewsReadMore">read more</button>
                    </article>
                </div>
                <div className="container">
                    <ul className="wrapperOldNews">
                        <li className="OldNewsCard">
                            <img src={blogOldNewsIMG} alt="News" />
                            <article className="wrapperOldNewsInfo">
                                <p className="textDateOfPublicationOld"></p>
                                <h3 className="titleOldNews">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                                <a href="#" className="linkToReadAboutOldNews">read more</a>
                            </article>
                        </li>
                        <li className="OldNewsCard">
                            <img src={blogOldNewsIMG} alt="News" />
                            <article className="wrapperOldNewsInfo">
                                <p className="textDateOfPublicationOld"></p>
                                <h3 className="titleOldNews">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                                <a href="#" className="linkToReadAboutOldNews">read more</a>
                            </article>
                        </li>
                        <li className="OldNewsCard">
                            <img src={blogOldNewsIMG} alt="News" />
                            <article className="wrapperOldNewsInfo">
                                <p className="textDateOfPublicationOld"></p>
                                <h3 className="titleOldNews">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                                <a href="#" className="linkToReadAboutOldNews">read more</a>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    )
}