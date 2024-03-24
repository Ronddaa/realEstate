import './AreaGuides.css'
import areaGuidesHeroIMG from '../assets/areaguidesHeroIMG.webp'
import guidesIMG from '../assets/guidesIMG.webp'
import Footer from './Footer'
import Header from './Header'

export default function AreaGuides() {
    return (
        <>
            <Header />

            <section className='areaguidesHeroSection'>
                <div className="container">
                    <h1 className="titleAreaGuides"><span>area</span> guides</h1>
                    <div className='wrapperMainBtn wrapperMainBtnAreaguides'>
                        <button className='mainContactBtn mainContactBtnAreaguides' id='mainContactBtnJoinUs'>Join us</button>
                        <button className='mainContactBtn mainContactBtnAreaguides'>Contact agent</button>
                    </div>
                </div>
                <img src={areaGuidesHeroIMG} alt="building" className="areaguidesHeroIMG" />
            </section>
            <section className='guidesSection'>
                <div className="container">
                    <ul className="wrapperGuidesCard">
                        <li className="guidesCard">
                            <img src={guidesIMG} alt="guide" className="guidesIMG" width={1033} height={744} />
                            <article className='wrapperGuidesInfo'>
                                <h2 className="titleGuidesInfo">notting hill</h2>
                                <p className="textGuidesInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="linkToCheckGuidesIngo">View Area</a>
                            </article>
                        </li>
                        <li className="guidesCard">
                            <img src={guidesIMG} alt="guide" className="guidesIMG" width={1033} height={744} />
                            <article className='wrapperGuidesInfo'>
                                <h2 className="titleGuidesInfo">Canary wharf</h2>
                                <p className="textGuidesInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="linkToCheckGuidesIngo">View Area</a>
                            </article>
                        </li>
                        <li className="guidesCard">
                            <img src={guidesIMG} alt="guide" className="guidesIMG" width={1033} height={744} />
                            <article className='wrapperGuidesInfo'>
                                <h2 className="titleGuidesInfo">camden</h2>
                                <p className="textGuidesInfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="linkToCheckGuidesIngo">View Area</a>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}