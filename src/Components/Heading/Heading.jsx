import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../../Data/NavbarData";
import styles from "../Heading/Heading.module.css";
import Logo from "../../Images/Mega_Movies_Logo.jpg";

export default function Heading() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  /**
   * When the user clicks on the hamburger menu, the showLinks state is set to the opposite of what it
   * currently is.
   */
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className={`nav-center ${styles.navCenter}`}>
        <div className={`nav-header ${styles.navHeader}`}>
          <img src={Logo} className={styles.logo} alt="logo"></img>
          <button
            className={`nav-toggle ${styles.navToggle}`}
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`links-container ${styles.linksContainer}`}
          ref={linksContainerRef}
        >
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className={`social-icons ${styles.socialIcons}`}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
