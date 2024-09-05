import Image from "next/image";

import mihaelaFileva from "../../assets/people/mihaela-fileva.jpg";
import daraYotova from "../../assets/people/dara-yotova.jpg";
import jaklin from "../../assets/people/jaklin.jpg";
import kristianKostov from "../../assets/people/kristian-kostov.jpg"
import pollyaIvanova from "../../assets/people/pollya-ivanova.jpg"
import "./ClientCard.scss";


const clients = [
  {
    name: "Mihaela Fileva",
    image: mihaelaFileva,
    description: "Pop star",
  },
  {
    name: "Dara Yotova",
    image: daraYotova,
    description: "Pop/hip-hop star",
  },
  {
    name: "Jaklin Tarakchi",
    image: jaklin,
    description: "The winner of The Voice of Bulgaria 2022",
  },
  {
    name: "Kristian Kostov",
    image: kristianKostov,
    description: "Second place at Eurovision 2017",
  },
  {
    name: "Pollya Ivanova",
    image: pollyaIvanova,
    description: "Finalist at Bulgaria's Got Talent",
  },
];

const ClientCard = () => {
  return (
    <div className="card-container">
      {clients.map((client, index) => (
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
