import React from "react";
import telegram from "./images/images,te.png";
import facebook from "./images/facebook.jpg";
import linkedin from "./images/link.jpg";

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="social-container">
        <div className="social-card">
          <img src={telegram} alt="Telegram" />
          <h4>Telegram Channel</h4>
          <p>FerhanMufti</p>
          <a href="https://t.me/FerhanMufti" target="_blank" rel="noreferrer">
            Visit Channel
          </a>
        </div>

        <div className="social-card">
          <img src={telegram} alt="Telegram" />
          <h4>Telegram Username</h4>
          <p>@FerrhS</p>
          <a
            href="https://t.me/FerrhS"
            target="_blank"
            rel="noreferrer"
          >
            Message Me
          </a>
        </div>

        <div className="social-card">
          <img src={linkedin} alt="LinkedIn" />
          <h4>LinkedIn</h4>
          <p>Ferhan Mufti</p>
          <a
            href="https://www.linkedin.com/in/ferhan-mufti-0b424335a"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

        <div className="social-card">
          <img src={facebook} alt="Facebook Profile" />
          <h4>Facebook Page</h4>
          <a
            href="https://www.facebook.com/profile.php?id=61580667285541"
            target="_blank"
            rel="noreferrer"
          >
            Open Facebook
          </a>
        </div>

        <div className="social-card">
          <img src={linkedin} alt="LinkedIn Secondary" />
          <h4>LinkedIn Profile</h4>
          <a
            href="https://www.linkedin.com/in/ferhan-mufti-0b424335a"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
