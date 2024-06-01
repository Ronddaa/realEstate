import './Rent.css';
import Header from '../Header';
import Footer from '../Footer';
import propertiesIMG from './propertiesIMG.webp';
import { useState, useEffect } from 'react';
import PropertiesCard from './PropertiesCard';
import properties from '../DBProperiesCard';

export default function Agents() {
  const [searchLocation, setSearchLocation] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState('');
  const [sqft, setSqft] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const filtered = properties.filter(property => {
      return (
        property.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
        (country === '' || property.country === country) &&
        (city === '' || property.city === city) &&
        (price === '' || property.price === price) &&
        (rooms === '' || property.rooms === rooms) &&
        (sqft === '' || property.sqft === sqft)
      );
    });
    setFilteredProperties(filtered);
  }, [searchLocation, country, city, price, rooms, sqft]);

  const handleSearchInputChange = event => {
    setSearchLocation(event.target.value);
  };

  const handleCountryChange = event => {
    setCountry(event.target.value);
  };

  const handleCityChange = event => {
    setCity(event.target.value);
  };

  const handlePriceChange = event => {
    setPrice(event.target.value);
  };

  const handleRoomsChange = event => {
    setRooms(event.target.value);
  };

  const handleSqftChange = event => {
    setSqft(event.target.value);
  };

  const resetFilters = () => {
    setSearchLocation('');
    setCountry('');
    setCity('');
    setPrice('');
    setRooms('');
    setSqft('');
  };

  return (
    <>
      <Header />
      <h1 className="titleRentComponent">
        <span>PROPERTIES</span> FOR RENT
      </h1>
      <img className="heroIMG" src={propertiesIMG} alt="GBN" height={500} />
      <div className="container titleFAQContainer">
        <h2 className="titleRentCategory">FOR RENT</h2>
        <form className="formRentFAQs" action="">
          <label htmlFor="searchInput" className="labelInputFAQ">
            <input
              type="text"
              id="searchInput"
              className="inputUserDateFAQ"
              value={searchLocation}
              onChange={handleSearchInputChange}
              placeholder="Search by location"
            />
          </label>
          <label htmlFor="countrySelect" className="labelInputFAQ category">
            <select
              id="countrySelect"
              className="inputUserDateFAQ"
              value={country}
              onChange={handleCountryChange}
              required
            >
              <option value="" disabled selected hidden>Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </label>
          <label htmlFor="citySelect" className="labelInputFAQ category">
            <select
              id="citySelect"
              className="inputUserDateFAQ"
              value={city}
              onChange={handleCityChange}
              required
            >
              <option value="" disabled selected hidden>City</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </label>
          <label htmlFor="priceSelect" className="labelInputFAQ category">
            <select
              id="priceSelect"
              className="inputUserDateFAQ"
              value={price}
              onChange={handlePriceChange}
              required
            >
              <option value="" disabled selected hidden>Price</option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              <option value="3000">3000</option>
            </select>
          </label>
          <label htmlFor="roomsSelect" className="labelInputFAQ category">
            <select
              id="roomsSelect"
              className="inputUserDateFAQ"
              value={rooms}
              onChange={handleRoomsChange}
              required
            >
              <option value="" disabled selected hidden>Rooms</option>
              <option value="1">1 room</option>
              <option value="2">2 rooms</option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
            </select>
          </label>
          <label htmlFor="sqftSelect" className="labelInputFAQ category">
            <select
              id="sqftSelect"
              className="inputUserDateFAQ"
              value={sqft}
              onChange={handleSqftChange}
              required
            >
              <option value="" disabled selected hidden>Square Feet</option>
              <option value="500">500 sqft</option>
              <option value="1000">1000 sqft</option>
              <option value="1500">1500 sqft</option>
              <option value="2000">2000 sqft</option>
            </select>
          </label>
          <button type="button" onClick={resetFilters} className="resetBtn">Reset</button>
        </form>
      </div>
      <div className="propertyList">
        {filteredProperties.map(property => (
          <PropertiesCard property={property} key={property.id} />
        ))}
      </div>
      <Footer />
    </>
  );
}
