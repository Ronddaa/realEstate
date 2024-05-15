import './PropertiesCard.css';

const PropertyCard = ({
    property
}) => {
    const { imageUrl,
        location,
        details,
        price,
        agentPhoto,
        agentName, } = property;
    console.log(property);
  return (
    <div className="propertyCard">
      <div className="propertyImage">
        <img className="propertyImage__img" src={imageUrl} alt="Property" />
      </div>
      <div className="propertyDetails">
      <div className="agentDetails">
        <img className="agentDetails__img" src={agentPhoto} alt="Agent" />
        <p className="agentDetails__name">{agentName}</p>
        </div>
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
        <a href="#" className="propertyDetails__button">View Property</a>
      </div> 
    </div> 
  );
};

export default PropertyCard;