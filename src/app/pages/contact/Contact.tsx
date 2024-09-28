"use client";

import dynamic from "next/dynamic";
import contactMic from "../../assets/contact-footer-mic.svg";

import "./Contact.scss";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const ScrollToTopBtn = dynamic(
  () => import("../../components/ScrollToTopButton/ScrollToTopBtn"),
  { ssr: false }
);

import connectMic from "../../assets/lottie-animations/connect-mic-2.json";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";
import { Container } from "react-bootstrap";

const Contact = () => {
  // const form = useRef<HTMLFormElement | null>(null);
  // const [done, setDone] = useState(false);

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (form.current) {
  //     emailjs
  //       .sendForm(
  //         "service_pn3oa7b",
  //         "template_v26dk7m",
  //         form.current,
  //         "bqrB8XkJapv1svIZy"
  //       )
  //       .then((result) => {
  //         console.log("Email sent:", result.text);
  //         setDone(true);
  //         form.current?.reset();
  //         setTimeout(() => {
  //           setDone(false);
  //         }, 3000);
  //       })
  //       .catch((error) => {
  //         console.log("Error sending email:", error.text);
  //       });
  //   }
  // };

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
              <div className="contact-email">academy@highlight-singing.com</div>
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
          музикалната индустрия. Чрез съвременни методи на обучение иreal-world
          insights, помагам на учениците да открият истинския си глас.
          Независимо дали в студиото или на сцената, моята цел е да вдъхновявам
          развитие и дълготрайна любов към пеенето. Аз съм отдаденa на това да
          развивам таланти и да помагам на всеки ученик да блести. &quot; <br />
          <br />
          <img src={contactMic.src} height={80} />
          <span className="author">Искра Милкова Ангелова</span>
        </p>
      </Container>
      <ScrollToTopBtn />
    </div>
  );
};

export default Contact;
