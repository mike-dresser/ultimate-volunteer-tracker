import React from 'react';
import { Link } from 'react-router-dom';
import FooterItem from './FooterItem';

function Footer() {
  return (
    <footer>
      <FooterItem
        url="https://discny.org/"
        imgSrc="/src/assets/DiscNY Skyline BW.png"
        hoverText="DiscNY Homepage"
      />
      <FooterItem
        url="https://instagram.com/discnewyork"
        imgSrc="/src/assets/1_Instagram_colored_svg_1-128.webp"
        hoverText="Instagram"
      />
      <FooterItem
        url="https://linktr.ee/discny"
        imgSrc="/src/assets/linktree-logo-icon.png"
        hoverText="linktr"
      />
      <FooterItem
        url="https://join.slack.com/t/discny/shared_invite/zt-277kqbgbp-SQfmKL1dPKVCXMMa9wucBQ"
        imgSrc="/src/assets/306_Slack_logo-64.webp"
        hoverText="Slack"
      />
      <FooterItem
        url="https://discny.org/newsletters"
        imgSrc="/src/assets/vector_652_01-64.webp"
        hoverText="Newsletter"
      />
      <FooterItem
        url="https://discny.org/s/category/donation"
        imgSrc="/src/assets/donate.webp"
        hoverText="Donate"
      />
      <FooterItem
        url="info@discny.org"
        imgSrc="/src/assets/email_mail__letter__internet__envelope__chat__1_-64.webp"
        hoverText="Contact"
      />
    </footer>
  );
}

export default Footer;
