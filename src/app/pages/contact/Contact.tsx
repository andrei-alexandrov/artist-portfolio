"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import Button from "@/app/components/Button/Button";

import "./Contact.scss";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const ScrollToTopBtn = dynamic(
  () => import("../../components/ScrollToTopButton/ScrollToTopBtn"),
  { ssr: false }
);

import connectMic from "../../assets/lottie-animations/connect-mic-2.json";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";
import { Container } from "react-bootstrap";

// TODO (Not ready)
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [done, setDone] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_pn3oa7b",
          "template_v26dk7m",
          form.current,
          "bqrB8XkJapv1svIZy"
        )
        .then((result) => {
          console.log("Email sent:", result.text);
          setDone(true);
          form.current?.reset();
          setTimeout(() => {
            setDone(false);
          }, 3000);
        })
        .catch((error) => {
          console.log("Error sending email:", error.text);
        });
    }
  };

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
          {/* <div className="contact-form">
              <div className="form">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="input-group">
                    <input
                      type="text"
                      name="user_name"
                      className="user"
                      placeholder="Name"
                      title="Name must be at least 2 characters long"
                      required
                    />
                    <input
                      type="email"
                      name="user_email"
                      className="user"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    className="user"
                    placeholder="Не изпращай съобщения в момента, защото трябва да се конфигурира email-ът ти в emailjs.com"
                    required
                    minLength={10}
                    title="Message must be at least 10 characters long"
                  />
                  <Button>Send</Button>
                  {done && (
                    <div className="sent-message-text">
                      <span className="thanks-message">
                        Thanks for contacting me!
                      </span>
                    </div>
                  )}
                </form>
                <br />
              </div>
            </div> */}
        </Container>
      </div>
      <Container>
        <p className="author-message">
          &quot;Искам да вдъхновя певците да разгърнат своя уникален вокален
          потенциал, като превърнат страстта си в силно емоционално изразяване.
          Във "Вокална Академия Хайлайт" ръководя отдаден екип, който развива
          технически умения, артистично самочувствие и готовност за музикалната
          индустрия. Чрез съвременни методи на обучение и
          <span style={{ color: "red" }}> real-world insights</span>, помагам
          на учениците да открият истинския си глас. Независимо дали в студиото
          или на сцената, моята цел е да вдъхновявам развитие и дълготрайна
          любов към пеенето. Аз съм отдаденa на това да развивам таланти и да
          помагам на всеки ученик да блести. &quot; <br />
          <br />
          <span className="author">Искра Милкова Ангелова</span>
        </p>
      </Container>
      <ScrollToTopBtn />
    </div>
  );
};

export default Contact;
