import './PropertiesCard.css';
import { Link } from 'react-router-dom';

const PropertyCard = ({
    property
}) => {
    const { imageUrl,
        location,
        details,
        price,
         } = property;
    console.log(property);
  return (
    <div className="propertyCard">
      <div className="propertyImage">
        <img className="propertyImage__img" src={imageUrl} alt="Property" />
      </div>
      <div className="propertyDetails">
        <h3 className="propertyDetails__location">{location}</h3>
        <p className="propertyDetails__description">{details}</p>
      {/* <div className="agentDetails"> */}
      {/* </div> */}
      {/* <div className="additionalInfo"> */}
        <ul className="additionalInfo__list">
          <li>2 rooms</li>
          <li>1 bath</li>
          <li>160qft</li>
        </ul>
        <p className="propertyDetails__price">{price} per month</p>
        {/* <button className="propertyDetails__button">View Property</button> */}
        <Link to={`/detail/${property.id}`} className="propertyDetails__button">View Property</Link>
      </div> 
    </div> 
  );
};

export default PropertyCard;