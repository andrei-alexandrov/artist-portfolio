import Image from "next/image";
import clientsData from "./clientsData";

import "./ClientCard.scss";

const ClientCard = () => {
  return (
    <div className="card-container">
      {clientsData.map((client, index) => (
        <div key={index}>
          <div className="image-container">
            <Image src={client.image} alt={client.name} className="card-img" />
          </div>
          <div className="card-data">
            <h3 className="card-name">{client.name}</h3>
            <p className="card-description">{client.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientCard;
