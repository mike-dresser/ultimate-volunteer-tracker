import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
      <Link to="https://discny.org/" >
        <img src="/src/assets/discnyny.png" alt= "DiscNY Homepage"/>
      </Link>
      <Link to="https://instagram.com/discnewyork">
        <img src="/src/assets/1_Instagram_colored_svg_1-128.webp" alt= "Instagram"/>
      </Link>
      <Link to="https://linktr.ee/discny">
        <img src="/src/assets/linktree.png" alt= "linktr"/>
      </Link>
      <Link to="https://join.slack.com/t/discny/shared_invite/zt-277kqbgbp-SQfmKL1dPKVCXMMa9wucBQ">
        <img src="/src/assets/306_Slack_logo-64.webp" alt="Slack"/>
      </Link>
      <Link to="https://discny.org/newsletters">
        <img src="/src/assets/vector_652_01-64.webp" alt= "Newsletter"/>
      </Link>
      <Link to="info@discny.org">
        <img src="/src/assets/donate.webp" alt= "Donate"/>
      </Link>
      <Link to="https://discny.org/s/category/donation">
        <img src="/src/assets/email_mail__letter__internet__envelope__chat__1_-64.webp" alt="Contact" />
      </Link>
    </footer>
  )
}

export default Footer
