import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../css/contact.css";
import Lottie from "lottie-react";
import mail from "../animation/mail.json";
import doneAnimation from "../animation/done.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("myyrkdeq");
  return (
    <section className="contact_us">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className="email flex">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="message flex">
            <label htmlFor="message">Your message:</label>
            <textarea name="message" id="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="flex state">
              <Lottie
                loop={false}
                style={{ height: 60 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie animationData={mail} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
