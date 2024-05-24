import './Rent.css';
import Header from '../Header';
import Footer from '../Footer';
import heroIMG from './heroIMG.webp'
import { useState, useEffect } from 'react';
import { ModalJoinUs } from '../Modals';
import PropertiesCard from './PropertiesCard';
import properties from '../DBProperiesCard';
import modalJoinUsIMG from './modalJoinUsIMG.webp'


export default function Agents() {
  const [modalPrizeIsOpen, setModalPrizeOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх страницы при монтировании компонента
  }, []);

  return (
    <>
      <Header />
      <h1 className="titleRentComponent">
        <span>PROPERTIES</span> FOR SALE
      </h1>
      {/* Кнопки */}
      <div className="buttonContainer">
        <button
          className="mainContactBtn"
          id="mainContactBtnJoinUs"
          onClick={() => setModalPrizeOpen(true)}
        >
          Join us
        </button>
      </div>
      {/* Кнопки */}
      {/* Изображение */}
      <img className="heroIMG" src={heroIMG} alt="GBN" height={500} />
      {/* Изображение */}
      {/* FOR RENT с категориями */}
      <div className="container titleFAQContainer">
        <h2 className="titleRentCategory">FOR RENT</h2>
        <form className="formRentFAQs" action="">
          <label htmlFor="searchInput" className="labelInputFAQ">
            <input
              type="text"
              id="searchInput"
              className="inputUserDateFAQ"
              required
            />
            <span className="textInInputFAQ">Search</span>
          </label>
          <label htmlFor="category1Select" className="labelInputFAQ">
            <select id="category1Select" className="inputUserDateFAQ" required>
              <option value="" disabled selected></option>
              <option value="category1Option1">Option 1</option>
            </select>
            <span className="textInInputFAQ">Category 1</span>
          </label>
          <label htmlFor="category2Select" className="labelInputFAQ">
            <select id="category2Select" className="inputUserDateFAQ" required>
              <option value="" disabled selected></option>
              <option value="category2Option1">Option 1</option>
            </select>
            <span className="textInInputFAQ">Category 2</span>
          </label>
          <label htmlFor="category3Select" className="labelInputFAQ">
            <select id="category3Select" className="inputUserDateFAQ" required>
              <option value="" disabled selected></option>
              <option value="category3Option1">Option 1</option>
            </select>
            <span className="textInInputFAQ">Category 3</span>
          </label>
          <label htmlFor="category4Select" className="labelInputFAQ">
            <select id="category4Select" className="inputUserDateFAQ" required>
              <option value="" disabled selected></option>
              <option value="category4Option1">Option 1</option>
            </select>
            <span className="textInInputFAQ">Category 4</span>
          </label>
          <label htmlFor="category5Select" className="labelInputFAQ">
            <select id="category5Select" className="inputUserDateFAQ" required>
              <option value="" disabled selected></option>
              <option value="category5Option1">Option 1</option>
            </select>
            <span className="textInInputFAQ">Category 5</span>
          </label>
        </form>
      </div>
      {/* FOR RENT с категориями */}

      {/* Карточки */}
      <div className="propertyList">
        {properties.map(property => (
          <PropertiesCard
            property={property}
            key={property.id}
          />
        ))}
      </div>
      {/* Карточки */}
      <Footer />
      <ModalJoinUs
        isOpen={modalPrizeIsOpen}
        onClose={() => setModalPrizeOpen(false)}
      >
        <img
          className="modalJoinUsIMG"
          src={modalJoinUsIMG}
          alt="Building"
          width={287}
          height={757}
        />
        <article>
          <h2 className="titleModalJoinUs">join us</h2>
          <p className="textModalJoinUs">
            If you are interested in partnering with us, please fill out the
            form below and we will be in contact.
          </p>
          <form action="" className="formModalJoinUs">
            <label
              htmlFor="inputForUserNameModalJoinUs"
              className="labelInputModalJoinUs"
            >
              <input
                type="text"
                className="inputUserDateModalJoinUs"
                id="inputForUserNameModalJoinUs"
                required
              />
              <span className="textInInputModalJoinUs">first name</span>
            </label>
            <label
              htmlFor="inputForUserSNameModalJoinUs"
              className="labelInputModalJoinUs"
            >
              <input
                type="text"
                className="inputUserDateModalJoinUs"
                id="inputForUserSNameModalJoinUs"
                required
              />
              <span className="textInInputModalJoinUs">last name</span>
            </label>
            <label
              htmlFor="inputForUserEmailModalJoinUs"
              className="labelInputModalJoinUs"
            >
              <input
                type="email"
                className="inputUserDateModalJoinUs"
                id="inputForUserEmailModalJoinUs"
                required
              />
              <span className="textInInputModalJoinUs">e-mail</span>
            </label>
            <label
              htmlFor="inputForUserPhoneModalJoinUs"
              className="labelInputModalJoinUs"
            >
              <input
                type="phone"
                className="inputUserDateModalJoinUs"
                id="inputForUserPhoneModalJoinUs"
                required
              />
              <span className="textInInputModalJoinUs">phone number</span>
            </label>
          </form>
        </article>
      </ModalJoinUs>
    </>
  );
}
