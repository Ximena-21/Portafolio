import React from 'react';
import { Icon } from '@components/icons/index';
import { socialMedia } from '@config';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialLinks">
        <ul>
          {socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="credit">
        <a href="https://github.com/bchiang7/v4" target='_blank' rel='noreferrer' >Designed by Brittany Chiang </a>
        <span>|</span>
        <a href="https://github.com/JuanC-JC" target='_blank' rel='noreferrer'  >Built by Ximena Anzola</a>
      </div>
    </div>
  )
}

export default Footer;