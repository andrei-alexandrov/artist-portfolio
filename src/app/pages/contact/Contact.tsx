"use client";

import { Container } from "react-bootstrap";
import dynamic from "next/dynamic";
import contactMic from "../../assets/contact/contact-footer-mic.svg";
import connectMic from "../../assets/lottie-animations/connect-mic-2.json";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";

import "./Contact.scss";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const ScrollToTopBtn = dynamic(
  () => import("../../components/ScrollToTopButton/ScrollToTopBtn"),
  { ssr: false }
);



const Contact = () => {

  return (
    <div id="contact">
      <div className="contact-container">
        <Container fluid className="title-container">
          <br />
          <div className="portfolio-section-title">Контакт</div>
          <Lottie style={{ width: "110px" }} animationData={connectMic} />
        </Container>
        <Container>
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-email">iskra@highlight-singing.com</div>
              <div className="contact-location">София, България</div>
              <div className="contact-icons">
                <MediaIcons isBlackBackground={true} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <p className="author-message">
          &quot;Искам да вдъхновя певците да разгърнат своя вокален потенциал,
          като превърнат страстта си в силно емоционално изразяване. Във
          &quot;Вокална Академия Хайлайт&quot; ръководя отдаден екип, който
          развива технически умения, артистично самочувствие и готовност за
          музикалната индустрия. Чрез съвременни методи на обучение и практически опит, помагам на учениците да открият истинския си глас.
          Независимо дали в студиото или на сцената, моята цел е да вдъхновявам
          развитие и дълготрайна любов към пеенето. Аз съм отдаденa на това да
          развивам таланти и да помагам на всеки ученик да блести.&quot;
          <img style={{marginTop: "1.5rem"}} src={contactMic.src} height={80} />
          <span className="author">Искра Милкова Ангелова</span>
        </p>
      </Container>
      <ScrollToTopBtn />
    </div>
  );
};

export default Contact;
