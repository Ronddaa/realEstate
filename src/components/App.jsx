import './App.css'
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import OurTeam from './OurTeam';
import Membership from './Membership';
import Agents from './Agents';
import { Error404 } from './Error404';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  )
}

{/* <img className='modalJoinUsIMG' src={modalJoinUsIMG} alt="Building" width={287} height={757} />
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
                <button className='mainContactBtn mainContactBtnModalJoinUs'></button>
            </article> */}