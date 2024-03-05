import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Link to="https://discny.org/">DiscNY Homepage</Link>
      <Link to="https://instagram.com/discnewyork">Instagram</Link>
      <Link to="https://linktr.ee/discny">linktr</Link>
      <Link to="https://join.slack.com/t/discny/shared_invite/zt-277kqbgbp-SQfmKL1dPKVCXMMa9wucBQ">Slack</Link>
      <Link to="https://discny.org/newsletters">Newsletter</Link>
      <Link to="info@discny.org">Donate</Link>
      <Link to="https://discny.org/s/category/donation">Contact</Link>
    </div>
  )
}

export default Footer
