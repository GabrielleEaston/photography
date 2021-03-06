import React from "react"
import { Link } from "gatsby"
import Categories from "./Categories"
import { RiFacebookLine, RiMailSendLine } from "react-icons/ri"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsPhone } from "react-icons/bs"
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Categories />
      <div className="nav-container">
        <ul className="nav">
          <Link fade to="/about">
            <li>About</li>
          </Link>
          <Link fade to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="social-links-container">
        <ul className="social-links nav-links">
          <li>
            <a
              href="https://instagram.com/gnycphotography?igshid=1ekqv3izurlkf"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/gonzalocisternasandoval/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <RiFacebookLine></RiFacebookLine>
            </a>
          </li>
          <li>
            <a
              href="mailto:info@gonzalocisterna.com"
              rel="noreferrer"
              className="social-link"
            >
              <RiMailSendLine></RiMailSendLine>
            </a>
          </li>
          <li>
            <a
              href="tel:2023749704"
              rel="noreferrer"
              className="social-link"
            >
              <BsPhone></BsPhone>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
