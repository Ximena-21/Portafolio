import React from 'react';
// import '../styles/components/social.scss'
import { socialMedia } from '@config';
import { Side } from '@components/index'
import { Icon } from '@components/icons';

export default function Social() {
  return (
    <Side orientation="left">
      <ul className='social'>
        {
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))
        }
      </ul>
    </Side>
  );
}
