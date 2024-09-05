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
    <div className="contact-form" id="contact">
      <div className="title">
      <div>Let&#39;s connect</div>

        <Lottie style={{ width: "110px" }} animationData={connectMic} />
      </div>

      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
            pattern=".{2,}"
            title="Name must be at least 2 characters long"
            onClick={() => setInputClicked(true)}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            onClick={() => setInputClicked(true)}
            required
          />
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
          <ScrollToTopBtn />
        </form>
      </div>
    </div>
  );
};

export default Contact;
