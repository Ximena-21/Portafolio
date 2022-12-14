import React from 'react';
import { Side } from '@components/index'
import { email } from '@config';


export default function Email() {
  return (
    <Side orientation='right'>
      <div className='email'>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </Side>
  );
};
