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
          <div className="portfolio-section-title">Contact</div>
          <Lottie style={{ width: "110px" }} animationData={connectMic} />
        </Container>
        <Container>
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-email">academy@highlight-singing.com</div>
              <div className="contact-location">Sofia, Bulgaria</div>
              <div className="contact-icons">
                <MediaIcons isBlackBackground={true} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <p className="author-message">
          &quot;I want to empower singers to unlock their unique vocal
          potential, transforming passion into powerful emotional expression. At
          HighLight Singing Academy, I lead a dedicated team to cultivate
          technical skills, artistic confidence, and industry readiness. Through
          modern teaching methods and real-world insights, I help students
          discover their true voice. Whether in the studio or on stage, my goal
          is to inspire growth and a lifelong love for singing. I am committed
          to nurturing talent and helping each student shine.&quot; <br />
          <br />
          <img src={contactMic.src} height={80} />
          <span className="author">Iskra Milkova Angelova</span>
        </p>
      </Container>
      <ScrollToTopBtn />
    </div>
  );
};

export default Contact;
