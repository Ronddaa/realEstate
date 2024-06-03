import './Service.css'

import Footer from "../Footer";
import Header from "../Header";
import sericeIMG from './serviceHeroIMG.webp'
import serviceInvestment from './serviceInvestment.webp'
import serviceBtoB from './serviceBtoB.webp'
import serviceDevelopments from './serviceDevelopments.webp'
import serviceLand from './serviceLand.webp'
import serviceVila from './serviceVila.webp'


export default function Service() {
    return (
        <>
            <Header />
            <section className="serviceSection">
                <div className="cintainerTitle">
                    <h1 className="titleService"><span>Ser</span>vice</h1>
                    <img className="heroIMG serviceIMG" src={sericeIMG} alt="Service" />
                </div>
            </section>
            <section>
                <div className="container">
                    <p className="justServiceText">Services</p>
                    <h2 className="titleScndServise">All-encompassing <br />in-house services to make your <span>investment a success</span></h2>
                </div>
            </section>
            <section className="CoreServiceSection">
                <div className="container">
                    <h2 className="titleCoreService">Core Service</h2>
                    <ul className="wrapperOurServiceList">
                        <li className="ourService">
                            <div className="wrapperServiceIMG">
                                <img className='ourServiceIMG' src={serviceDevelopments} alt="Development" />
                            </div>
                            <h3 className="titleServiceCard">Development</h3>
                            <p className="infoServiceCard">Crafting exquisite lifestyle-focused developments that embody luxury and modern-day sophistication.</p>
                        </li>
                        <li className="ourService">
                            <div className="wrapperServiceIMG">
                                <img className='ourServiceIMG' src={serviceInvestment} alt="Investment" />
                            </div>
                            <h3 className="titleServiceCard">Investment</h3>
                            <p className="infoServiceCard">Unveiling lucrative investment avenues in Bali`s thriving real estate market.</p>
                        </li>
                        <li className="ourService">
                            <div className="wrapperServiceIMG">
                                <img className='ourServiceIMG' src={serviceVila} alt="Vila" />
                            </div>
                            <h3 className="titleServiceCard">Vila Sales</h3>
                            <p className="infoServiceCard">Buy residential villas, resort villas, or apartments. We have over 1000 units under construction and more projects coming soon.</p>
                        </li>
                        <li className="ourService">
                            <div className="wrapperServiceIMG">
                                <img className='ourServiceIMG' src={serviceBtoB} alt="BtoB" />
                            </div>
                            <h3 className="titleServiceCard">End-to-end Legal & Taxation Services</h3>
                            <p className="infoServiceCard">Rely on our registered in-house experts for tailored advice on business taxation, legal structures, and immigration, ensuring your investment`s longevity and security.</p>
                        </li>
                        <li className="ourService">
                            <div className="wrapperServiceIMG">
                                <img className='ourServiceIMG' src={serviceLand} alt="Land" />
                            </div>
                            <h3 className="titleServiceCard">Land Sales & Acquistions</h3>
                            <p className="infoServiceCard">We acquire land in top locations, unlocking and maximizing its investment potential to pave the way for lucrative opportunities.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}