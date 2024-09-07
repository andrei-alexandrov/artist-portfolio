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

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [done, setDone] = useState(false);
  const [isInputClicked, setInputClicked] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_pn3oa7b",
          "template_v26dk7m",
          form.current,
          "UPcddvsUqVlOgA_We"
        )
        .then((result) => {
          console.log("Email sent:", result.text);
          setDone(true);
          setInputClicked(false);
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
      <Container fluid className="title-container">
        <div className="portfolio-section-title">Let&#39;s connect</div>
        <Lottie style={{ width: "110px" }} animationData={connectMic} />
      </Container>
      <Container>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-title">Get in touch</div>
            <div className="contact-details">
              <div className="contact-email">placeholder@gmail.com</div>
              <div className="contact-location">Sofia, Bulgaria</div>
              <div className="contact-icons">
                <MediaIcons />
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-group">
                  <input
                    type="text"
                    name="user_name"
                    className="user"
                    placeholder="Name"
                    title="Name must be at least 2 characters long"
                    onClick={() => setInputClicked(true)}
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    className="user"
                    placeholder="Email"
                    onClick={() => setInputClicked(true)}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  className="user"
                  placeholder="Message"
                  required
                  minLength={10}
                  title="Message must be at least 10 characters long"
                  onClick={() => setInputClicked(true)}
                />
                <Button>Send</Button>
                {done && (
                  <div className="sent-message-text">
                    <span>Thanks for contacting me.</span>
                    {/* Add any custom image for the thanks icon if needed */}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div>
          <p className="author-message">
            &quot;I want to empower singers to unlock their unique vocal
            potential, transforming passion into powerful emotional expression.
            At HighLight Singing Academy, I lead a dedicated team to cultivate
            technical skills, artistic confidence, and industry readiness.
            Through modern teaching methods and real-world insights, I help
            students discover their true voice. Whether in the studio or on
            stage, my goal is to inspire growth and a lifelong love for singing.
            I am committed to nurturing talent and helping each student
            shine.&quot; <br />
            <br />
            <span className="author">Iskra Milkova Angelova</span>
          </p>
        </div>
      </Container>
      <ScrollToTopBtn />
    </div>
  );
};

export default Contact;
